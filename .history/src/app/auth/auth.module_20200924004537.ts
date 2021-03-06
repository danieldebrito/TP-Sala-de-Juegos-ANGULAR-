import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthService } from './auth.service';

import { RegisterComponent } from './register/register.component';
import { SendEmailComponent } from './send-email/send-email.component';

import { LoginModule } from './login/login.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';


@NgModule({
  declarations: [
    RegisterComponent,
    SendEmailComponent,
   ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    ForgotPasswordModule
  ],
  exports: [
  ],
  providers: [
    AuthService
  ],
})
export class AuthModule { }
