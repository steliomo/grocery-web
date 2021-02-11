import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConfirmationDialogModule } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.module';
import { InputMessageModule } from 'src/app/shared/components/input-message/input-message.module';
import { PagingModule } from 'src/app/shared/components/paging/paging.module';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceListComponent } from './service-list/service-list.component';



@NgModule({
  declarations: [ServiceFormComponent, ServiceListComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule, 
    InputMessageModule,
    PagingModule, 
    ConfirmationDialogModule
  ]
})
export class ServiceModule { }
