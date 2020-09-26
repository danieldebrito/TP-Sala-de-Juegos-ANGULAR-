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


@NgModule({
  imports: [
    CommonModule,
    GamesModuleRoutingModule,
    AgilidadModule,
    AdivinaModule,
    LayoutModuleModule,
    BoardModule
  ]
})
export class GamesModuleModule { }
