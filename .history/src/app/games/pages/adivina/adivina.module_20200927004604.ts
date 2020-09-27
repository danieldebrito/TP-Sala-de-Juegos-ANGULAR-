import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdivinaRoutingModule } from './adivina-routing.module';
import { AdivinaComponent } from './adivina.component';

import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [AdivinaComponent],
  imports: [
    CommonModule,
    AdivinaRoutingModule,
    MaterialModule
  ]
})
export class AdivinaModule { }
