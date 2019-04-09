import { NgModule } from '@angular/core';
import { Routes, RouterModule}  from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ProductFormComponent } from './products/product/product-form/product-form.component';
import { ProductListComponent } from './products/product/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductDescriptionFormComponent } from './products/product-description/product-description-form/product-description-form.component';
import { ProductResolver } from './products/product-description/product.resolver';
import { ProductDescriptionListComponent } from './products/product-description/product-description-list/product-description-list.component';

const routes: Routes  = [
    {
        path: 'products',
        component: ProductsComponent,

        children:[
            {
                path: 'product-form',
                component: ProductFormComponent,
                
            },

            {
                path: '',
                component: ProductDescriptionListComponent
            },

            {
                path: 'product-description',
                component: ProductDescriptionFormComponent,
                resolve: {
                    products: ProductResolver
                }
            },

            {
                path: 'product-list',
                component: ProductListComponent,
                resolve: {
                    products: ProductResolver
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