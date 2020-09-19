import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { CardsComponent } from './cards/cards.component';


const routes: Routes = [
  { path: 'juegos', component: BoardComponent, children: [
    { path: '', component: CardsComponent},
    // { path: 'adivina', component: AdivinaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
