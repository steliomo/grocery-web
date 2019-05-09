import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StocksComponent } from './stocks.component';
import { CoreModule } from '../core/core.module';
import { AlertModule } from '../shared/components/alert/alert.module';
import { StockFormComponent } from './stock-form/stock-form.component';
import { InputMessageModule } from '../shared/components/input-message/input-message.module';
import { SearchModule } from '../shared/components/search/search.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StockListComponent } from './stock-list/stock-list.component';
import { PagingModule } from '../shared/components/paging/paging.module';
import { ConfirmationDialogModule } from '../shared/components/confirmation-dialog/confirmation-dialog.module';

@NgModule({
  
  declarations: [ StocksComponent, StockFormComponent, StockListComponent ],

  imports: [
    CommonModule, 
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    
    CoreModule, 
    AlertModule, 
    InputMessageModule, 
    SearchModule, 
    PagingModule, 
    ConfirmationDialogModule
  ]
})
export class StocksModule { }
