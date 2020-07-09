import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { ErrorsModule } from './errors/errors.module';
import { GroceriesModule } from './groceries/groceries.module';
import { HomeModule } from './home/home.module';
import { StocksModule } from './stocks/stocks.module';
import { UsersModule } from './users/users.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    ErrorsModule,
    HomeModule,
    GroceriesModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
