import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnagramaComponent } from './anagrama.component';

const routes: Routes = [
  {
    path: '',
    component: AnagramaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnagramaRoutingModule { }
