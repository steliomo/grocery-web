import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';
import { ProductModule } from './product/product.module';
import { CoreModule } from '../core/core.module';
import { ProductDescriptionModule } from './product-description/product-description.module';
import { AlertModule } from '../shared/components/alert/alert.module';
import { SearchModule } from '../shared/components/search/search.module';
import { ProductUnitModule } from './product-unit/product-unit.module';

@NgModule({
    declarations: [
        ProductsComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        CoreModule,
        AlertModule, 
        SearchModule,
        ProductModule,
        ProductDescriptionModule,
        ProductUnitModule
    ]
})
export class ProductsModule{

}