import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ******************************** ROUTING ****************************************** //
import { GamesModuleRoutingModule } from './games-module-routing.module';
// ******************************** COMPONENTS ****************************************** //
import { BoardModule } from './components/board/board.module';
import { LayoutModuleModule } from './components/layout-games/layout.module';
// ******************************** PAGES ****************************************** //
import { AdivinaModule } from './pages/adivina/adivina.module';
import { AgilidadModule } from './pages/agilidad/agilidad.module';
import { PptModule } from './pages/ppt/ppt.module';


@NgModule({
  imports: [
    CommonModule,
    GamesModuleRoutingModule,
    AgilidadModule,
    AdivinaModule,
    PptModule,
    LayoutModuleModule,
    BoardModule
  ]
})
export class GamesModuleModule { }
