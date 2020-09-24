import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginModule } from './login/login.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { RegisterModule } from './register/register.module';
import { SendEmailModule } from './send-email/send-email.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
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
