import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Product } from '../../product/product';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ProductUnit } from '../../product-unit/product-unit';
import { ProductDescription } from '../product-description';
import { ProductDescriptionService } from '../product-description.service';

@Component({
  selector: 'app-product-description-form',
  templateUrl: './product-description-form.component.html',
  styleUrls: ['./product-description-form.component.css']
})
export class ProductDescriptionFormComponent implements OnInit{
    
    products: Product[] = [];
    productUnits: ProductUnit[] = [];
    productDescriptionForm: FormGroup;
    productDescription: ProductDescription;
    
    constructor(private route: ActivatedRoute, private router: Router  ,private formBuilder: FormBuilder, private alertService: AlertService, private productDescriptionService: ProductDescriptionService) {}
    
    ngOnInit() { 
        this.products = this.route.snapshot.data.products;
        this.productUnits = this.route.snapshot.data.productUnits;
        this.productUnits.forEach(productUnit => productUnit.name = productUnit.unit+' '+productUnit.productUnitType);

        this.productDescription = this.route.snapshot.data.productDescription;

        this.productDescriptionForm = this.formBuilder.group({
            description: ['', Validators.required]
        });

        if(this.productDescription){
            this.productDescription.productUnit.name = this.productDescription.productUnit.unit+''+this.productDescription.productUnit.productUnitType;
            this.productDescriptionForm.patchValue(this.productDescription);
        }else{
            this.productDescription = this.productDescriptionForm.getRawValue() as ProductDescription;
        }
    }

    searchProduct(query: string){
        if(query){
            this.products = this.products.filter(product => product.name.toLowerCase().includes(query));
        }else{
            this.products = this.route.snapshot.data.products;
        }
    }

    searchProductUnit(query: string){
        if(query){
            this.productUnits = this.productUnits.filter(productUnit => productUnit.unit.toString().includes(query) || productUnit.productUnitType.toLowerCase().includes(query));
        }else{
            this.productUnits = this.route.snapshot.data.productUnits;
            this.productUnits.forEach(productUnit => productUnit.name = productUnit.unit+' '+productUnit.productUnitType);
        }
    }

    selectedProduct(product: Product){
        this.productDescription.product = product;
    }

    selectProductUnit(productUnit: ProductUnit){
        this.productDescription.productUnit = productUnit;
    }

    saveProductDescription(){

        if(this.productDescriptionForm.valid && !this.productDescriptionForm.pending){

            if(!this.productDescription.product){
                this.alertService.danger('O campo "Producto" deve ser seleccinado');
                return;
            }

            if(!this.productDescription.productUnit){
                this.alertService.danger('O campo "Unidade" deve ser seleccinado');
                return;
            }

            const productDescription = this.productDescriptionForm.getRawValue();
            this.productDescription.description = productDescription.description;

            this.productDescriptionService
                .createProductDescription(this.productDescription)
                .subscribe(productDescription => {
                    this.router.navigate(['/products']);
                    this.alertService.success('O Detalhe do producto "'+productDescription.product.name+' '+productDescription.description+' '+productDescription.productUnit.unit+ ' '+productDescription.productUnit.productUnitType+'" foi criado com sucesso!')
                }, 
                error => {
                    this.alertService.danger('Ocorreu um erro ao criar o detalhe do producto!');
                    console.log(error);
                });
        }
    }

    updateProductDescription(){

        if(this.productDescriptionForm.valid && !this.productDescriptionForm.pending){

            const productDescription = this.productDescriptionForm.getRawValue();
            this.productDescription.description = productDescription.description;

            this.productDescriptionService
                .upadateProductDescription(this.productDescription)
                .subscribe(productDescription => {
                    this.router.navigate(['/products']);
                    this.alertService.success('O Detalhe do producto "'+productDescription.product.name+' '+productDescription.description+' '+productDescription.productUnit.unit+ ' '+productDescription.productUnit.productUnitType+'" foi actualizado com sucesso!')
                }, 
                error => {
                    this.alertService.danger('Ocorreu um erro ao actualizar o detalhe do producto!');
                    console.log(error);
                });
        }

    }
}
