import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StocksComponent } from './stocks.component';
import { CoreModule } from '../core/core.module';
import { AlertModule } from '../shared/components/alert/alert.module';

@NgModule({
  
  declarations: [ StocksComponent ],

  imports: [
    CommonModule, 
    RouterModule,
    CoreModule, 
    AlertModule
  ]
})
export class StocksModule { }
