import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    AccessDeniedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ErrorsModule { }
