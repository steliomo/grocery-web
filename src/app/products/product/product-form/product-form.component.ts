import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Product } from '../product';
import { AlertService } from 'src/app/shared/components/alert/alert.service';
import { ProductService } from '../product-service';

@Component({
    selector: 'go-product-form',
    templateUrl: 'product-form.component.html',
    styleUrls: ['product-form.component.css']
})
export class ProductFormComponent implements OnInit{
    
    products: Product[] = [];
    productForm: FormGroup;
    
    constructor(private activeRoute: ActivatedRoute, 
        private formBuilder: FormBuilder, 
        private alertService: AlertService, 
        private productService: ProductService,
        private router: Router) {}
        
        ngOnInit() { 
            this.products = this.activeRoute.snapshot.data.products;
            this.productForm = this.formBuilder.group({
                name: ['', [Validators.required, Validators.minLength(3)] ]
            });
        }
        
        saveProduct(){
            if(this.productForm.valid && !this.productForm.pending){
                const product = this.productForm.getRawValue() as Product;
                this.productService
                .createteProduct(product)
                .subscribe(productCreated => {
                    this.alertService.success('O producto '+productCreated.name+' foi criado com sucesso.');
                    this.router.navigate(['/products/product-list']);
                    this.productForm.reset();
                }, error => {
                    console.log(error);
                    this.alertService.danger('Erro ao criar o produto!');
                });
            }
        }
    }