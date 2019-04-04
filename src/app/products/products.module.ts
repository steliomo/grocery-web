import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductModule } from './product/product.module';
import { CoreModule } from '../core/core.module';
import { ProductDescriptionModule } from './product-description/product-description.module';

@NgModule({
    declarations: [
        ProductsComponent
    ],

    imports: [
        CommonModule,
        ProductModule,
        CoreModule,
        RouterModule,
        ProductDescriptionModule
    ]
})
export class ProductsModule{

}