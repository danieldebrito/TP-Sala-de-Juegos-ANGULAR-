import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JugadasListadoRoutingModule } from './jugadas-listado-routing.module';
import { JugadasListadoComponent } from './jugadas-listado.component';


@NgModule({
  declarations: [JugadasListadoComponent],
  imports: [
    CommonModule,
    JugadasListadoRoutingModule
  ]
})
export class JugadasListadoModule { }
