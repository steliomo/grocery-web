import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMessageModule } from 'src/app/shared/components/input-message/input-message.module';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    InputMessageModule, 
    AlertModule
  ]
})
export class LoginModule { }
