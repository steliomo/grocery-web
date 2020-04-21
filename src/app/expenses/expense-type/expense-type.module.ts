import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseTypeFormComponent } from './expense-type-form/expense-type-form.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputMessageModule } from 'src/app/shared/components/input-message/input-message.module';

@NgModule({
  declarations: [ExpenseTypeFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    InputMessageModule
  ]
})
export class ExpenseTypeModule { }
