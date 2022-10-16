import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../core/auth/auth.guard';
import { ExpenseTypeFormComponent } from './expense-type/expense-type-form/expense-type-form.component';
import { ExpenseTypeListComponent } from './expense-type/expense-type-list/expense-type-list.component';
import { ExpenseTypeResolver } from './expense-type/expense-type.resolver';
import { ExpensesComponent } from './expenses.component';
import { ExpenseTypeValueResolver } from './expense-type/expense-type-value.resolver';
import { AdminGuard } from '../core/auth/admin.guard';

const routes: Routes = [
    {
        path: '',
        component: ExpensesComponent,
        canActivate: [AuthGuard, AdminGuard],
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
                component: ExpenseTypeFormComponent,
                resolve: {
                    expenseTypeDTO: ExpenseTypeValueResolver
                }
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ExpensesRoutingModule{}