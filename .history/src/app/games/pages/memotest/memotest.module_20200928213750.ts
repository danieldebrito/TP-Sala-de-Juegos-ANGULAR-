import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemotestComponent } from './memotest.component';
import { MemotestRoutingModule } from './memotyest-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MemotestComponent
  ],
  imports: [
    CommonModule,
    MemotestRoutingModule,
    // BrowserModule,
    FormsModule,
    // BrowserAnimationsModule
  ]
})
export class MemotestModule { }
