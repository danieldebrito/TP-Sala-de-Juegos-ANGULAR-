import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CasacaRoutingModule } from './casaca-routing.module';
import { CasacaComponent } from './casaca.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [CasacaComponent],
  imports: [
    CommonModule,
    FormsModule,
    CasacaRoutingModule,
    MaterialModule
  ]
})
export class CasacaModule { }
