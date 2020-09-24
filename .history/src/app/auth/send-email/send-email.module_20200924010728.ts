import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './send-email-routing.module';
import { AuthService } from '../auth.service';
import { SendEmailComponent } from './send-email.component';

@NgModule({
  declarations: [
    SendEmailComponent
   ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [
    AuthService
  ],
})
export class SendEmailModule { }
