import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProductUnitFormComponent } from './product-unit-form/product-unit-form.component';
import { InputMessageModule } from 'src/app/shared/components/input-message/input-message.module';
import { ProductUnitListComponent } from './product-unit-list/product-unit-list.component';
import { ConfirmationDialogModule } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.module';
import { PagingModule } from 'src/app/shared/components/paging/paging.module';

@NgModule({
  declarations: [ProductUnitFormComponent, ProductUnitListComponent],
  imports: [
    CommonModule, 
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,

    InputMessageModule,
    ConfirmationDialogModule, 
    PagingModule
  ]
})
export class ProductUnitModule { }
