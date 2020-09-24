import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { LoginComponent } from 'src/app/auth/login/login.component';

@NgModule({
  declarations: [
    RegisterComponent,
    SendEmailComponent,
    ForgotPasswordComponent
   ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LoginComponent
  ],
  exports: [
  ],
  providers: [
    AuthService
  ],
})
export class AuthModule { }
