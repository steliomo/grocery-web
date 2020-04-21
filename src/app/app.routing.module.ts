import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginGuard } from './core/auth/login.guard';
import { LoginComponent } from './core/login/login.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ExpenseTypeListComponent } from './expenses/expense-type/expense-type-list/expense-type-list.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { GroceryFormComponent } from './groceries/grocery-form/grocery-form.component';
import { GroceryListComponent } from './groceries/grocery-list/grocery-list.component';
import { GroceryResolver } from './groceries/grocery.resolver';
import { HomeComponent } from './home/home.component';
import { ProductDescriptionFormComponent } from './products/product-description/product-description-form/product-description-form.component';
import { ProductDescriptionListComponent } from './products/product-description/product-description-list/product-description-list.component';
import { ProductDescriptionValueResolver } from './products/product-description/product-description-value.resolver';
import { ProductDescriptionResolver } from './products/product-description/product-description.resolver';
import { ProductUnitResolver } from './products/product-description/product-unit.resolver';
import { ProductResolver } from './products/product-description/product.resolver';
import { ProductUnitFormComponent } from './products/product-unit/product-unit-form/product-unit-form.component';
import { ProductUnitListComponent } from './products/product-unit/product-unit-list/product-unit-list.component';
import { ProductFormComponent } from './products/product/product-form/product-form.component';
import { ProductListComponent } from './products/product/product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { StockFormComponent } from './stocks/stock-form/stock-form.component';
import { StockListComponent } from './stocks/stock-list/stock-list.component';
import { StockValueResolver } from './stocks/stock-value.resolver';
import { StockResolver } from './stocks/stock.resolver';
import { StocksComponent } from './stocks/stocks.component';
import { GroceryUserResolver } from './users/grocery-user.resolver';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserRoleResolver } from './users/user-role.resolver';
import { UsersComponent } from './users/users.component';
import { ExpenseTypeResolver } from './expenses/expense-type/expense-type.resolver';
import { ExpenseTypeFormComponent } from './expenses/expense-type/expense-type-form/expense-type-form.component';


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
    },

    {
        path: 'groceries',
        component: GroceriesComponent,
        children: [
            {
                path: '',
                component: GroceryListComponent,
                resolve: {
                    groceryDTO: GroceryResolver
                }
            },

            {
                path: 'grocery-create',
                component: GroceryFormComponent
            }
        ]
    },

    {
        path: 'users',
        component: UsersComponent,
        children: [
            {
                path: '',
                component: UserListComponent,
                resolve: {
                    groceryUsers: GroceryUserResolver
                }
            },

            {
                path: 'user-create',
                component: UserFormComponent,
                resolve: {
                    groceryDTO: GroceryResolver,
                    userRoles: UserRoleResolver
                }
            }
        ]
    },
    
    {
        path: 'expenses',
        component: ExpensesComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: ExpenseTypeListComponent,
                resolve: {
                    expensesDTO: ExpenseTypeResolver
                }
            },

            {
                path: 'expenses-type-create',
                component: ExpenseTypeFormComponent
            },

            {
                path: 'expenses-type-edit/:expenseTypeUuid',
                component: ExpenseTypeFormComponent
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