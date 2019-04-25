import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { InputMessageModule } from 'src/app/shared/components/input-message/input-message.module';
import { PagingModule } from 'src/app/shared/components/paging/paging.module';
import { ConfirmationDialogModule } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.module';

@NgModule({
    declarations:[ 
        ProductFormComponent,
        ProductListComponent
    ],
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
export class ProductModule {

}