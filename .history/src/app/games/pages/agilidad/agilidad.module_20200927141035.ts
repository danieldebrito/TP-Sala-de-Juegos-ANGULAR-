import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgilidadRoutingModule } from './agilidad-routing.module';
import { AgilidadComponent } from './agilidad.component';

import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [AgilidadComponent],
  imports: [
    CommonModule,
    AgilidadRoutingModule,
    MaterialModule
  ]
})
export class AgilidadModule { }
