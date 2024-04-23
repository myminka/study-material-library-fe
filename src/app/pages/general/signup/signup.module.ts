import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';


@NgModule({
  declarations: [SignupComponent],
  exports: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule
  ],
  providers: []
})
export class SignupModule { }
