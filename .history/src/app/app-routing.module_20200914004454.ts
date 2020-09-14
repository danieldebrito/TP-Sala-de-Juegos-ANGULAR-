import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from 'src/app/layout/about/about.component';
import { BoardComponent } from './grid_cards/aa-board/aa-board.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
