import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosModule } from 'src/app/grid_cards/juegos/juegos.module';

import { GridCardsRoutingModule } from 'src/app/grid_cards/grid-cards-routing.module';

import { BoardComponent } from './aa-board/aa-board.component';

import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  declarations: [
    JuegosModule,
    BoardComponent,
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
