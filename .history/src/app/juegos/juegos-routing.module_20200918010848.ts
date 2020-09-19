import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { CardsComponent } from './cards/cards.component';
import { AdivinaComponent } from 'src/app/grid_cards/juegos/adivina/adivina.component';


const routes: Routes = [
  { path: 'juegos', component: AdivinaComponent, children: [
    { path: '', component: CardsComponent},
    { path: 'adivina', component: AdivinaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
