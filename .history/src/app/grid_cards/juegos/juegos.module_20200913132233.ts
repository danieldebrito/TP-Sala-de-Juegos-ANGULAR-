import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdivinaComponent } from './adivina/adivina.component';
import { AnagramaComponent } from './anagrama/anagrama.component';
import { PptComponent } from './ppt/ppt.component';
import { TatetiComponent } from './tateti/tateti.component';
import { MemotestComponent } from './memotest/memotest.component';
import { AgilidadComponent } from './agilidad/agilidad.component';
import { CasacaComponent } from './casaca/casaca.component';


@NgModule({
  declarations: [
    AdivinaComponent,
    AnagramaComponent,
    PptComponent,
    TatetiComponent,
    MemotestComponent,
    AgilidadComponent,
    CasacaComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
  ]
})
export class JuegosModule { }
