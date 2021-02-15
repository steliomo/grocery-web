import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationDialogModule } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.module';
import { InputMessageModule } from 'src/app/shared/components/input-message/input-message.module';
import { PagingModule } from 'src/app/shared/components/paging/paging.module';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { ServiceItemFormComponent } from './service-item-form/service-item-form.component';
import { ServiceItemListComponent } from './service-item-list/service-item-list.component';




@NgModule({
  declarations: [ServiceItemListComponent, ServiceItemFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    InputMessageModule,
    PagingModule,
    ConfirmationDialogModule,
    SearchModule
  ]
})
export class ServiceItemModule { }
