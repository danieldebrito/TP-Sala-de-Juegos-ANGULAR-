import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgilidadRoutingModule } from './agilidad-routing.module';
import { AgilidadComponent } from './agilidad.component';


@NgModule({
  declarations: [AgilidadComponent],
  imports: [
    CommonModule,
    AgilidadRoutingModule
  ]
})
export class AgilidadModule { }
