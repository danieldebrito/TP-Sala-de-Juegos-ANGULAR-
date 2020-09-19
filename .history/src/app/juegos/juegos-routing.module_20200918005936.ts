import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './board/board.component';
import { CardsComponent } from './cards/cards.component';


const routes: Routes = [
  // { path: 'juegos', component: BoardComponent }
  {
    path: 'Juegos',
    component: BoardComponent,
    children:
      [{ path: '', component: CardsComponent }]
        /*
        {path: 'Adivina' , component: AdivinaElNumeroComponent},
         {path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
         {path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
   {path: 'Agilidad' , component: AgilidadAritmeticaComponent}*/
      // ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
