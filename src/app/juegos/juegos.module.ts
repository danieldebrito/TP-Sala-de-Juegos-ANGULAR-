import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { BoardComponent } from './board/board.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [BoardComponent, CardsComponent],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
