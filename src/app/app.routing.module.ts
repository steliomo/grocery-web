import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginGuard } from './core/auth/login.guard';
import { LoginComponent } from './core/login/login.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { GroceryFormComponent } from './groceries/grocery-form/grocery-form.component';
import { GroceryListComponent } from './groceries/grocery-list/grocery-list.component';
import { GroceryResolver } from './groceries/grocery.resolver';
import { HomeComponent } from './home/home.component';
import { GroceryUserResolver } from './users/grocery-user.resolver';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserRoleResolver } from './users/user-role.resolver';
import { UsersComponent } from './users/users.component';

const routes: Routes  = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    
    {
        path: 'products',
        loadChildren: ()=> import('./products/products.module').then(m => m.ProductsModule)
    },

    {
        path: 'stocks',
        loadChildren: () => import('./stocks/stocks.module').then(m => m.StocksModule)
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
        loadChildren: () => import('./expenses/expenses.module').then(m => m.ExpensesModule)
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