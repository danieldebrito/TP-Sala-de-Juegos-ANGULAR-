import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdivinaRoutingModule } from './adivina-routing.module';
import { AdivinaComponent } from './adivina.component';


@NgModule({
  declarations: [AdivinaComponent],
  imports: [
    CommonModule,
    AdivinaRoutingModule
  ]
})
export class AdivinaModule { }
