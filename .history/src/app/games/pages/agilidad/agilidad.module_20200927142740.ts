import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgilidadRoutingModule } from './agilidad-routing.module';
import { AgilidadComponent } from './agilidad.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [AgilidadComponent],
  imports: [
    CommonModule,
    AgilidadRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class AgilidadModule { }
