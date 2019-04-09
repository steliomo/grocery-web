import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';
import { InputMessageModule } from 'src/app/shared/components/input-message/input-message.module';

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
        InputMessageModule
    ]
})
export class ProductModule {

}