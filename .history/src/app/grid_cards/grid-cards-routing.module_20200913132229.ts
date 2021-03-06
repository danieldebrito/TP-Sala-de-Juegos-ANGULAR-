import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from 'src/app/grid_cards/aa-board/aa-board.component';
import { MenuCardsComponent } from './menu-cards/menu-cards.component';

import { AdivinaComponent } from './juegos/adivina/adivina.component';
import { AgilidadComponent } from './juegos/agilidad/agilidad.component';
import { AnagramaComponent } from './juegos/anagrama/anagrama.component';
import { CasacaComponent } from './juegos/casaca/casaca.component';
import { MemotestComponent } from './juegos/memotest/memotest.component';
import { PptComponent } from './juegos/ppt/ppt.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';

const routes: Routes = [
  {
    path: 'Juegos',
    component: BoardComponent,
    children: [
      { path: '', component: MenuCardsComponent },
      { path: 'Adivina', component: AdivinaComponent },
      { path: 'Agilidad', component: AgilidadComponent },
      { path: 'Anagrama', component: AnagramaComponent },
      { path: 'Casaca', component: CasacaComponent },
      { path: 'Memotest', component: MemotestComponent },
      { path: 'Ppt', component: PptComponent },
      { path: 'Tateti', component: TatetiComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridCardsRoutingModule { }
