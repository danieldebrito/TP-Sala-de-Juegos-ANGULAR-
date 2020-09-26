import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesModuleRoutingModule } from './games-module-routing.module';
import { BoardComponent } from './components/board/board.component';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [BoardComponent, LayoutComponent, AdivinaComponent, AgilidadComponent],
  imports: [
    CommonModule,
    GamesModuleRoutingModule
  ]
})
export class GamesModuleModule { }
