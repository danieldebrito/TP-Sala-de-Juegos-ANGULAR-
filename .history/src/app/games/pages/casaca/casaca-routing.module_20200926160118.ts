import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasacaComponent } from './casaca.component';

const routes: Routes = [
{
  path: '',
  component: CasacaComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasacaRoutingModule { }
