import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendEmailRoutingModule } from './send-email.component';

const routes: Routes = [
  { path: '', component: RegisterComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SendEmailRoutingModule { }
