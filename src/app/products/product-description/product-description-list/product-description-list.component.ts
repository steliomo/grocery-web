import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { ProductDescription } from '../product-description';
import { ProductDescriptionService } from '../product-description.service';
import { ConfirmationDialogService } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.service';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
    templateUrl: 'product-description-list.component.html'
})
export class ProductDescriptionListComponent implements OnInit, OnDestroy{
    
    totalItems: number;
    items: ProductDescription [];
    query: Subject<string> = new Subject();
    eventValue: any;
    
    constructor(private productDescriptionService: ProductDescriptionService, private route: ActivatedRoute, private confirmationDialogService: ConfirmationDialogService, private alertService: AlertService){}
    
    ngOnInit(): void {
        const productDescriptionDTO = this.route.snapshot.data.productDescriptionDTO;
        this.items = productDescriptionDTO.productDescriptions;
        this.totalItems = productDescriptionDTO.totalItems;

        this.query
            .pipe(debounceTime(300))
            .subscribe(value => {
                value = value.trim();

                if(value){
                    this.productDescriptionService
                        .fetchProductDescriptionByDescription(value)
                        .subscribe(productDescriptions => {
                            this.items = productDescriptions;
                            this.totalItems = productDescriptions.length;
                        });
                }else{
                    const productDescriptionDTO = this.route.snapshot.data.productDescriptionDTO;
                    this.items = productDescriptionDTO.productDescriptions;
                    this.totalItems = productDescriptionDTO.totalItems;
                }
            })
    }
    
    updateDate(eventValue: any){
        this.eventValue = eventValue
        this.productDescriptionService
            .fetchdAllProductDescriptions(eventValue.currentPage - 1, eventValue.pageSize)
            .subscribe(productDescriptionDTO => {
                this.items = productDescriptionDTO.productDescriptions;
            });
    }
    
    ngOnDestroy(): void {
       this.query.unsubscribe();
    }

    selectedProductDescription(productDescription: ProductDescription){
        this.confirmationDialogService.setDialog('Tem a certeza de que pretente remover o detalhe do product "'+productDescription.product.name+' '+productDescription.description+' '+ productDescription.productUnit.unit+ ''+productDescription.productUnit.productUnitType+'"', productDescription);
    }

    removeProductDescription(productDescription: ProductDescription){
        this.productDescriptionService
            .removeProductDescription(productDescription.uuid)
            .subscribe( productDescription => {
                this.alertService.success('O detalhe do producto "'+productDescription.product.name+' '+productDescription.description+' '+ productDescription.productUnit.unit+ ''+productDescription.productUnit.productUnitType+'" foi removido com sucesso!');
                this.productDescriptionService
                    .fetchdAllProductDescriptions(this.eventValue.currentPage - 1, this.eventValue.pageSize)
                    .subscribe(productDescriptionDTO => {
                        this.items = productDescriptionDTO.productDescriptions;
                    });
            },
            error => {
                this.alertService.danger('Ocorreu um erro ao remover o detalhe do producto');
                console.log(error);
            });
    }
}