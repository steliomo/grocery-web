import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductDTO } from '../../product/product-dto';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ProductUnitDTO } from '../../product-unit/product-unit-dto';
import { ProductDescriptionService } from '../product-description.service';
import { ProductDescriptionDTO } from '../product-description-dto';

@Component({
  selector: 'app-product-description-form',
  templateUrl: './product-description-form.component.html',
  styleUrls: ['./product-description-form.component.css']
})
export class ProductDescriptionFormComponent implements OnInit{
    
    products: ProductDTO[] = [];
    productUnits: ProductUnitDTO[] = [];
    productDescriptionForm: FormGroup;
    productDescription: ProductDescriptionDTO;
    
    constructor(private route: ActivatedRoute, private router: Router  ,private formBuilder: FormBuilder, private alertService: AlertService, private productDescriptionService: ProductDescriptionService) {}
    
    ngOnInit() { 
        this.products = this.route.snapshot.data.products;
        this.productUnits = this.route.snapshot.data.productUnits;

        this.productDescription = this.route.snapshot.data.productDescription;

        this.productDescriptionForm = this.formBuilder.group({
            description: ['', Validators.required]
        });

        if(this.productDescription){
            this.productDescriptionForm.patchValue(this.productDescription);
        }else{
            this.productDescription = this.productDescriptionForm.getRawValue() as ProductDescriptionDTO;
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
        }
    }

    selectedProduct(product: ProductDTO){
        this.productDescription.productDTO = product;
    }

    selectProductUnit(productUnit: ProductUnitDTO){
        this.productDescription.productUnitDTO = productUnit;
    }

    saveProductDescription(){

        if(this.productDescriptionForm.valid && !this.productDescriptionForm.pending){

            if(!this.productDescription.productDTO){
                this.alertService.danger('O campo "Producto" deve ser seleccinado');
                return;
            }

            if(!this.productDescription.productUnitDTO){
                this.alertService.danger('O campo "Unidade" deve ser seleccinado');
                return;
            }

            const productDescription = this.productDescriptionForm.getRawValue();
            this.productDescription.description = productDescription.description;

            this.productDescriptionService
                .createProductDescription(this.productDescription)
                .subscribe(productDescription => {
                    this.router.navigate(['/products']);
                    this.alertService.success('O Detalhe do producto "'+productDescription.name+'" foi criado com sucesso!')
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
                    this.alertService.success('O Detalhe do producto "'+productDescription.productDTO.name+' '+productDescription.description+' '+productDescription.productUnitDTO.unit+ ' '+productDescription.productUnitDTO.productUnitType+'" foi actualizado com sucesso!')
                }, 
                error => {
                    this.alertService.danger('Ocorreu um erro ao actualizar o detalhe do producto!');
                    console.log(error);
                });
        }

    }
}
