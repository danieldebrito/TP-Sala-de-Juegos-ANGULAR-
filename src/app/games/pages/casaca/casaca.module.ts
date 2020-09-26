import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasacaRoutingModule } from './casaca-routing.module';
import { CasacaComponent } from './casaca.component';


@NgModule({
  declarations: [CasacaComponent],
  imports: [
    CommonModule,
    CasacaRoutingModule
  ]
})
export class CasacaModule { }
