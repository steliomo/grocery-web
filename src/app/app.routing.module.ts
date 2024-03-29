import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/auth/admin.guard';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginGuard } from './core/auth/login.guard';
import { LoginComponent } from './core/login/login.component';
import { AccessDeniedComponent } from './errors/access-denied/access-denied.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { GroceryFormComponent } from './groceries/grocery-form/grocery-form.component';
import { GroceryListComponent } from './groceries/grocery-list/grocery-list.component';
import { GroceryResolver } from './groceries/grocery.resolver';
import { UnitTypesResolver } from './groceries/unit-types.resolver';
import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { GroceryUserResolver } from './users/grocery-user.resolver';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserRoleResolver } from './users/user-role.resolver';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
    },

    {
        path: 'service',
        loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)
    },

    {
        path: 'stocks',
        loadChildren: () => import('./stocks/stocks.module').then(m => m.StocksModule)
    },

    {
        path: 'service-items',
        loadChildren: () => import('./service-items/service-items.module').then(m => m.ServiceItemsModule)
    },

    {
        path: 'groceries',
        component: GroceriesComponent,
        canActivate: [AdminGuard],
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
                component: GroceryFormComponent,
                resolve: {
                    unitTypes: UnitTypesResolver
                }
            }
        ]
    },

    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AdminGuard],
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
        path: 'access-denied',
        component: AccessDeniedComponent
    },

    {
        path: 'privacy',
        component: PrivacyPolicyComponent
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
export class AppRoutingModule { }