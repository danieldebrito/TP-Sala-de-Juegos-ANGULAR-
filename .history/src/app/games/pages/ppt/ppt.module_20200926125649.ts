import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PptComponent } from './ppt.component';

import { AgilidadRoutingModule } from './agilidad-routing.module';

@NgModule({
  declarations: [PptComponent],
  imports: [
    CommonModule,
    AgilidadRoutingModule
  ]
})
export class PptModule { }
