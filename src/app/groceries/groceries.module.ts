import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { GroceriesComponent } from './groceries.component';
import { AlertModule } from '../shared/components/alert/alert.module';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { PagingModule } from '../shared/components/paging/paging.module';
import { ConfirmationDialogModule } from '../shared/components/confirmation-dialog/confirmation-dialog.module';
import { GroceryFormComponent } from './grocery-form/grocery-form.component';
import { InputMessageModule } from '../shared/components/input-message/input-message.module';
import { SearchModule } from '../shared/components/search/search.module';

@NgModule({
  declarations: [GroceriesComponent, GroceryListComponent, GroceryFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule, 
    AlertModule, 
    PagingModule,
    ConfirmationDialogModule, 
    InputMessageModule,
    SearchModule
  ]
})
export class GroceriesModule { }
