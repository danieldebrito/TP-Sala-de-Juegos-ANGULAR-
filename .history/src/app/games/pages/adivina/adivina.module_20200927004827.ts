import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdivinaRoutingModule } from './adivina-routing.module';
import { AdivinaComponent } from './adivina.component';

import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [AdivinaComponent],
  imports: [
    CommonModule,
    AdivinaRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AdivinaModule { }
