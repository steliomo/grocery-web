import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';
import { StocksModule } from './stocks/stocks.module';
import { GroceriesModule } from './groceries/groceries.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    ErrorsModule,
    ProductsModule, 
    HomeModule, 
    StocksModule, 
    GroceriesModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
