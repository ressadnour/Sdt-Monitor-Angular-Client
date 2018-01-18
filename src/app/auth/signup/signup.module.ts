import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SignupRoutingModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }
