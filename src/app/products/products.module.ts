import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { AlertModule } from '../shared/components/alert/alert.module';
import { SearchModule } from '../shared/components/search/search.module';
import { ProductDescriptionModule } from './product-description/product-description.module';
import { ProductUnitModule } from './product-unit/product-unit.module';
import { ProductModule } from './product/product.module';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routing.module';


@NgModule({
    declarations: [
        ProductsComponent
    ],

    imports: [
        CoreModule,
        AlertModule, 
        SearchModule,
        ProductModule,
        ProductDescriptionModule,
        ProductUnitModule,
        ProductsRoutingModule
    ]
})
export class ProductsModule{

}