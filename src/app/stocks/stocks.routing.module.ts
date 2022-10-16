import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/auth/admin.guard';
import { AuthGuard } from '../core/auth/auth.guard';
import { GroceryResolver } from '../groceries/grocery.resolver';
import { ProductDescriptionResolver } from '../products/product-description/product-description.resolver';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockValueResolver } from './stock-value.resolver';
import { StockResolver } from './stock.resolver';
import { StocksComponent } from './stocks.component';

const routes: Routes = [
    {
        path: '',
        component: StocksComponent,
        canActivate: [AuthGuard, AdminGuard],
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
                    groceryDTO: GroceryResolver,
                    productDescriptionDTO: ProductDescriptionResolver,
                }
            },

            {
                path: 'stock-edit/:stockUuid',
                component: StockFormComponent,
                resolve: {
                    groceryDTO: GroceryResolver,
                    productDescriptionDTO: ProductDescriptionResolver,
                    stock: StockValueResolver
                }
            }
        ]
    }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class StocksRoutingModule { }
