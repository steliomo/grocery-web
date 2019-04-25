import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Product } from '../product';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ProductService } from '../product-service';
import { ConfirmationDialogService } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  
  products: Product[] = [];
  totalItems: number;
  items: Product[];
  query: Subject<string> = new Subject();

  constructor(private alertService: AlertService, private activeRoute: ActivatedRoute, private productService: ProductService, private confirmationDialogService: ConfirmationDialogService) { }
  
  ngOnInit() {
    this.products = this.activeRoute.snapshot.data.products;
    this.totalItems = this.products.length;
    this.items = this.products.slice(0, 8);
    
    this.query
        .pipe(debounceTime(300))
        .subscribe(value => {
          value = value.trim().toLowerCase();

          if(value){
            this.items = this.products.filter(product => product.name.toLowerCase().includes(value));
            this.totalItems = this.items.length;
          }else{
            this.items = this.products.slice(0, 8);
            this.totalItems = this.products.length;
          }
        });
  }
  
  updateDate(eventValue: any){
    this.items = this.products.slice(eventValue.startPage, eventValue.endPage);
  }

  selectedProduct(product: Product){
    this.confirmationDialogService.setDialog("Tem a certeza que pretente revomer o produto '"+product.name+"'?", product);
  }

  removeProduct(eventValue: any){
    this.productService
        .removeProduct(eventValue.uuid)
        .subscribe(product => {
          this.alertService.success("O producto "+product.name+" foi removido com sucesso!" )
          this.products = this.activeRoute.snapshot.data.products;
          this.totalItems = this.products.length;
          this.items = this.products.slice(0, 8);
        }, 
        error => this.alertService.danger("Erro ao remover o produto"));
  }
  
  ngOnDestroy(): void {
    this.query.unsubscribe();
  }

}
