import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { AlertModule } from '../shared/components/alert/alert.module';
import { ConfirmationDialogModule } from '../shared/components/confirmation-dialog/confirmation-dialog.module';
import { InputMessageModule } from '../shared/components/input-message/input-message.module';
import { PagingModule } from '../shared/components/paging/paging.module';
import { SearchModule } from '../shared/components/search/search.module';
import { StockFormComponent } from './stock-form/stock-form.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StocksComponent } from './stocks.component';
import { StocksRoutingModule } from './stocks.routing.module';


@NgModule({

  declarations: [StocksComponent, StockFormComponent, StockListComponent],

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
    ConfirmationDialogModule,
    StocksRoutingModule
  ]
})
export class StocksModule { }
