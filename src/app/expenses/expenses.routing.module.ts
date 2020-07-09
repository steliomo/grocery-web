import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from '../core/auth/auth.guard';
import { ExpenseTypeFormComponent } from './expense-type/expense-type-form/expense-type-form.component';
import { ExpenseTypeListComponent } from './expense-type/expense-type-list/expense-type-list.component';
import { ExpenseTypeResolver } from './expense-type/expense-type.resolver';
import { ExpensesComponent } from './expenses.component';

const routes: Routes = [
    {
        path: '',
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
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ExpensesRoutingModule{}