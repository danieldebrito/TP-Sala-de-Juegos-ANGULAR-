import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdivinaComponent } from './adivina.component';

const routes: Routes = [
{
  path: '',
  component: AdivinaComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdivinaRoutingModule { }
