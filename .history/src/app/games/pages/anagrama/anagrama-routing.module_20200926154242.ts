import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgilidadComponent } from './agilidad.component';

const routes: Routes = [
  {
    path: '',
    component: AgilidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgilidadRoutingModule { }
