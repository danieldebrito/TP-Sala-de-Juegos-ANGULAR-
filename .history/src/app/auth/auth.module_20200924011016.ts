import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthService } from './auth.service';

import { SendEmailComponent } from './send-email/send-email.component';

import { LoginModule } from './login/login.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { RegisterModule } from './register/register.module';
import { SendEmailModule } from './send-email/send-email.module';


@NgModule({
  declarations: [
    SendEmailComponent,
   ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    ForgotPasswordModule,
    RegisterModule,
    SendEmailModule
  ],
  exports: [
  ],
  providers: [
    AuthService
  ],
})
export class AuthModule { }
