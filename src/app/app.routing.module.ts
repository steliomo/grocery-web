import { NgModule } from '@angular/core';
import { Routes, RouterModule}  from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ProductFormComponent } from './products/product/product-form/product-form.component';
import { ProductListComponent } from './products/product/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductDescriptionFormComponent } from './products/product-description/product-description-form/product-description-form.component';
import { ProductResolver } from './products/product-description/product.resolver';
import { ProductDescriptionListComponent } from './products/product-description/product-description-list/product-description-list.component';
import { ProductUnitFormComponent } from './products/product-unit/product-unit-form/product-unit-form.component';
import { ProductUnitResolver } from './products/product-description/product-unit.resolver';
import { ProductUnitListComponent } from './products/product-unit/product-unit-list/product-unit-list.component';
import { HomeComponent } from './home/home.component';
import { ProductDescriptionResolver } from './products/product-description/product-description.resolver';

const routes: Routes  = [
    {
        path: 'home',
        component: HomeComponent
    },
    
    {
        path: 'products',
        component: ProductsComponent,
        
        children:[
            {
                path: '',
                component: ProductDescriptionListComponent,
                resolve: {
                    productDescriptionDTO: ProductDescriptionResolver
                }
            },

            {
                path: 'product-description-edit/:productDescriptionUuid',
                component: ProductDescriptionFormComponent,
                resolve: {
                    products: ProductResolver,
                    productUnits: ProductUnitResolver
                }
            },

            {
                path: 'product-description-create',
                component: ProductDescriptionFormComponent,
                resolve: {
                    products: ProductResolver,
                    productUnits: ProductUnitResolver
                }
            },

            {
                path: 'product-create',
                component: ProductFormComponent,
            },

            {
                path: 'product-edit/:productUuid',
                component: ProductFormComponent
            },

            {
                path: 'product-list',
                component: ProductListComponent,
                resolve: {
                    products: ProductResolver
                }
            },

            {
                path: 'product-unit-create',
                component: ProductUnitFormComponent
            },

            {
                path: 'product-unit-edit/:productUnitUuid',
                component: ProductUnitFormComponent
            },

            {
                path: 'product-unit-list',
                component: ProductUnitListComponent,
                resolve: {
                    productUnits: ProductUnitResolver
                }
            }
        ]
    },
    
    {
        path: 'not-found',
        component: NotFoundComponent
    },

    {
        path: '**',
        redirectTo: 'not-found'
    }
]

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],

  exports: [
      RouterModule
  ]

})
export class AppRoutingModule{}