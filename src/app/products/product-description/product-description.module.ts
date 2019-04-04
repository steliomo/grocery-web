import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductDescriptionFormComponent } from './product-description-form/product-description-form.component';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';
import { Product } from '../product/product';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@NgModule({
    declarations: [ ProductDescriptionFormComponent ],

    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AlertModule
    ]
})
export class ProductDescriptionModule{

    products: Product[] = [];
    productForm: FormGroup;
    
    constructor(private activeRoute: ActivatedRoute, private formBuilder: FormBuilder, private alertService: AlertService) {}

    ngOnInit() { 
        this.products = this.activeRoute.snapshot.data.products;
        this.productForm = this.formBuilder.group({
            product: ['', Validators.required ],
            productDescription: ['', Validators.required],
            productSize: ['', Validators.required]
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
}