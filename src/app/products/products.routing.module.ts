import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth/auth.guard';
import { ProductDescriptionFormComponent } from './product-description/product-description-form/product-description-form.component';
import { ProductDescriptionListComponent } from './product-description/product-description-list/product-description-list.component';
import { ProductDescriptionValueResolver } from './product-description/product-description-value.resolver';
import { ProductDescriptionResolver } from './product-description/product-description.resolver';
import { ProductUnitResolver } from './product-description/product-unit.resolver';
import { ProductResolver } from './product-description/product.resolver';
import { ProductUnitFormComponent } from './product-unit/product-unit-form/product-unit-form.component';
import { ProductUnitListComponent } from './product-unit/product-unit-list/product-unit-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    canActivate: [AuthGuard],

    children: [
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
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
