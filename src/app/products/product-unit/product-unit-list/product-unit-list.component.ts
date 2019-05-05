import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { ProductUnit } from '../product-unit';
import { debounceTime } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ConfirmationDialogService } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.service';
import { ProductUnitService } from '../product-unit.service';

@Component({
  selector: 'app-product-unit-list',
  templateUrl: './product-unit-list.component.html',
  styleUrls: ['./product-unit-list.component.css']
})
export class ProductUnitListComponent implements OnInit, OnDestroy {
  
  productUnits: ProductUnit[] = [];
  totalItems: number = 0;
  items: ProductUnit[];
  query: Subject<string> = new Subject();
  eventValue: any;
  
  constructor(private activeRoute: ActivatedRoute, private confirmationDialog: ConfirmationDialogService, private productUnitService: ProductUnitService, private aletService: AlertService) { }
  
  ngOnInit() {
    this.productUnits = this.activeRoute.snapshot.data.productUnits;
    this.totalItems = this.productUnits.length;
    this.items = this.productUnits.slice(0, 8);
    
    this.query
    .pipe(debounceTime(300))
    .subscribe(value => {
      
      value = value.trim().toLowerCase();
      
      if(value){
        this.items = this.productUnits.filter(productUnit => productUnit.unit.toString().includes(value) || productUnit.productUnitType.toLowerCase().includes(value));
        this.totalItems = this.items.length;
      }else{
        this.items = this.productUnits.slice(0, 8);
        this.totalItems = this.productUnits.length;
      }

    });
  }
  
  updateDate(eventValue: any){
    this.eventValue = eventValue;
    this.items = this.productUnits.slice(this.eventValue.startPage, this.eventValue.endPage);
  }

  selectedProductUnit(productUnit: ProductUnit): void{
      this.confirmationDialog.setDialog('Tem a certeza de que pretende remover a unidade "'+productUnit.unit+' '+productUnit.productUnitType+'"', productUnit);
  }

  removeProductUnit(productUnit: ProductUnit){
    this.productUnitService
        .removeProductUnit(productUnit.uuid)
        .subscribe(productUnitRemoved => {
          this.productUnitService
              .findAllProductUnits()
              .subscribe(productUnits =>{
                this.productUnits = productUnits;
                this.totalItems = this.productUnits.length;
                this.items = this.productUnits.slice(this.eventValue.startPage, this.eventValue.endPage);
                this.aletService.success('A unidade "'+productUnitRemoved.unit+' '+productUnitRemoved.productUnitType+'" foi removida com sucesso');
              });
        }, 
        error => {
          this.aletService.danger('Ocorreu um erro ao remover a unidade "'+productUnit.unit+' '+productUnit.productUnitType+'"');
          console.log(error);
        });
  }
  
  ngOnDestroy(): void {
    this.query.unsubscribe();
  }
}
