import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridCardsComponent } from './grid-cards/grid-cards.component';
import { AdivinaComponent } from 'src/app/grid_cards/juegos/adivina/adivina.component';

@NgModule({
  declarations: [
    AdivinaComponent,
    GridCardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GridCardsModule { }
