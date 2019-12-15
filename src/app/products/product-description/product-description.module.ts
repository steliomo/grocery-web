import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ProductDescriptionFormComponent } from './product-description-form/product-description-form.component';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';
import { ProductDescriptionListComponent } from './product-description-list/product-description-list.component';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { InputMessageModule } from 'src/app/shared/components/input-message/input-message.module';
import { PagingModule } from 'src/app/shared/components/paging/paging.module';
import { ConfirmationDialogModule } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.module';

@NgModule({
    declarations: [ 
        ProductDescriptionFormComponent,
        ProductDescriptionListComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AlertModule,
        SearchModule,
        InputMessageModule, 
        PagingModule,
        ConfirmationDialogModule
    ]
})
export class ProductDescriptionModule{}