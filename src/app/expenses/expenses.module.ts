import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { AlertModule } from '../shared/components/alert/alert.module';
import { ExpenseTypeListComponent } from './expense-type/expense-type-list/expense-type-list.component';
import { ExpenseTypeModule } from './expense-type/expense-type.module';
import { ExpensesComponent } from './expenses.component';
import { ExpensesRoutingModule } from './expenses.routing.module';

@NgModule({
  declarations: [ExpensesComponent, ExpenseTypeListComponent],
  imports: [
    CommonModule,
    CoreModule,
    AlertModule,
    ExpenseTypeModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
