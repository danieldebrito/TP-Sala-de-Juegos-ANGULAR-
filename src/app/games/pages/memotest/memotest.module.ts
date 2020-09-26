import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemotestComponent } from './memotest.component';

import { MemotestRoutingModule } from './memotyest-routing.module';

@NgModule({
  declarations: [MemotestComponent],
  imports: [
    CommonModule,
    MemotestRoutingModule
  ]
})
export class MemotestModule { }
