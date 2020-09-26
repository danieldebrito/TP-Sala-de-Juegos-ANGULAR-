import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesModuleRoutingModule } from './games-module-routing.module';
import { BoardComponent } from './components/board/board.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdivinaComponent } from './pages/adivina/adivina.component';


@NgModule({
  declarations: [
    BoardComponent,
    LayoutComponent,
    AdivinaComponent
  ],
  imports: [
    CommonModule,
    GamesModuleRoutingModule
  ]
})
export class GamesModuleModule { }
