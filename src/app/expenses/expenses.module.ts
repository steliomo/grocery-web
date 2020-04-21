import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './expenses.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { AlertModule } from '../shared/components/alert/alert.module';
import { ExpenseTypeListComponent } from './expense-type/expense-type-list/expense-type-list.component';
import { ExpenseTypeModule } from './expense-type/expense-type.module';

@NgModule({
  declarations: [ExpensesComponent, ExpenseTypeListComponent],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    AlertModule,
    ExpenseTypeModule
  ]
})
export class ExpensesModule { }
