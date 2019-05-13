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
import { ProductDescriptionValueResolver } from './products/product-description/product-description-value.resolver';
import { StocksComponent } from './stocks/stocks.component';
import { StockFormComponent } from './stocks/stock-form/stock-form.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import { StockResolver } from './stocks/stock.resolver';
import { StockValueResolver } from './stocks/stock-value.resolver';
import { LoginComponent } from './core/login/login.component';
import { LoginGuard } from './core/auth/login.guard';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes  = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard],
        
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
                    productUnits: ProductUnitResolver, 
                    productDescription: ProductDescriptionValueResolver
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
        path: 'stocks',
        component: StocksComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: StockListComponent,
                resolve: {
                    stockDTO: StockResolver
                }
            },

            {
                path: 'stock-create',
                component: StockFormComponent, 
                resolve: {
                    productDescriptionDTO: ProductDescriptionResolver
                }
            },

            {
                path: 'stock-edit/:stockUuid',
                component: StockFormComponent,
                resolve: {
                    productDescriptionDTO: ProductDescriptionResolver,
                    stock: StockValueResolver
                }
            }
        ]
    },
    
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard]
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