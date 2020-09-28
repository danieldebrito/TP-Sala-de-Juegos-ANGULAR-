import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemotestComponent } from './memotest.component';

import { MemotestRoutingModule } from './memotyest-routing.module';

import { CronometroComponent } from './cronometro/cronometro.component';
import { FormsModule } from '@angular/forms';
import { TableroComponent } from './tablero/tablero.component';

import { TarjetaService } from './servicios/tarjeta.service';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TableroService } from './servicios/tablero.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CronometroComponent,
    TableroComponent,
    TarjetaComponent
  ],
  imports: [
    CommonModule,
    MemotestRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    TarjetaService,
    TableroService
  ],
})
export class MemotestModule { }
