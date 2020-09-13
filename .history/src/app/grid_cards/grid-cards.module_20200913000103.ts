import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdivinaComponent } from 'src/app/grid_cards/juegos/adivina/adivina.component';
import { AaBoardComponent } from './aa-board/aa-board.component';
import { AnagramaComponent } from './juegos/anagrama/anagrama.component';

@NgModule({
  declarations: [
    AdivinaComponent,
    AaBoardComponent,
    AnagramaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GridCardsModule { }
