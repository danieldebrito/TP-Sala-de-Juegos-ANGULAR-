import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridCardsRoutingModule } from 'src/app/grid_cards/grid-cards-routing.module';

import { AdivinaComponent } from 'src/app/grid_cards/juegos/adivina/adivina.component';
import { AaBoardComponent } from './aa-board/aa-board.component';
import { AnagramaComponent } from './juegos/anagrama/anagrama.component';
import { PptComponent } from './juegos/ppt/ppt.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';
import { MemotestComponent } from './juegos/memotest/memotest.component';
import { AgilidadComponent } from './juegos/agilidad/agilidad.component';

import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  declarations: [
    AdivinaComponent,
    AaBoardComponent,
    AnagramaComponent,
    PptComponent,
    TatetiComponent,
    MemotestComponent,
    AgilidadComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    GridCardsRoutingModule
  ],
  exports: [
    GridCardsRoutingModule
  ]
})
export class GridCardsModule { }
