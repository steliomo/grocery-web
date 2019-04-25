import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Product } from '../../product/product';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Component({
  selector: 'app-product-description-form',
  templateUrl: './product-description-form.component.html',
  styleUrls: ['./product-description-form.component.css']
})
export class ProductDescriptionFormComponent implements OnInit{
    
    products: Product[] = [];
    productForm: FormGroup;
    
    constructor(private activeRoute: ActivatedRoute, private formBuilder: FormBuilder, private alertService: AlertService) {}
    
    ngOnInit() { 
        this.products = this.activeRoute.snapshot.data.products;
        this.productForm = this.formBuilder.group({
            productDescription: ['', Validators.required]
        });
    }
    
    productSizes: string[] = [
        "1Kg",
        "1L",
        "200g"
    ]
    
    saveProduct(){
        const productDescription = this.productForm.getRawValue();
        this.alertService.success('Detalhe do Producto Cadastrado com sucesso!');
        this.productForm.reset();
    }

    searchProduct(query: string){
        if(query){
            this.products = this.products.filter(product => product.name.toLowerCase().includes(query));
        }else{
            this.products = this.activeRoute.snapshot.data.products;
        }
    }

    searchProductDescription(query: string){
        console.log(query);
    }

    selectedProduct(product: Product){
        console.log(product);
    }
}
