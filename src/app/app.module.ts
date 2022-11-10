import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { ErrorsModule } from './errors/errors.module';
import { GroceriesModule } from './groceries/groceries.module';
import { HomeModule } from './home/home.module';
import { PrivacyPolicyModule } from './privacy-policy/privacy-policy.module';
import { UsersModule } from './users/users.module';


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
    UsersModule,
    PrivacyPolicyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
