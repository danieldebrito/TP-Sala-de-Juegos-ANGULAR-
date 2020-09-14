import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { JuegosModule } from 'src/app/grid_cards/juegos/juegos.module';
// routing
import { JuegosRoutingModule } from 'src/app/grid_cards/grid-cards-routing.module';
// components
import { BoardComponent } from './aa-board/aa-board.component';
import { RankingComponent } from './ranking/ranking.component';
import { MenuCardsComponent } from './menu-cards/menu-cards.component';

@NgModule({
  declarations: [
    BoardComponent,
    RankingComponent,
    MenuCardsComponent
  ],
  imports: [
    JuegosRoutingModule,
    CommonModule,
    JuegosModule
  ],
  exports: [
    MenuCardsComponent,
    BoardComponent
  ]
})
export class GridCardsModule { }
