import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AlertModule } from '../shared/components/alert/alert.module';
import { PagingModule } from '../shared/components/paging/paging.module';
import { ConfirmationDialogModule } from '../shared/components/confirmation-dialog/confirmation-dialog.module';
import { InputMessageModule } from '../shared/components/input-message/input-message.module';
import { SearchModule } from '../shared/components/search/search.module';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserFormComponent],
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
export class UsersModule { }
