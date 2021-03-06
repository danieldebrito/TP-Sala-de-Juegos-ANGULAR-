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
import { TatetiModule } from './pages/tateti/tateti.module';
import { AnagramaModule } from './pages/anagrama/anagrama.module';
import { MemotestModule } from './pages/memotest/memotest.module';


@NgModule({
  imports: [
    CommonModule,
    GamesModuleRoutingModule,
    AgilidadModule,
    AdivinaModule,
    PptModule,
    LayoutModuleModule,
    BoardModule,
    TatetiModule,
    AnagramaModule,
    MemotestModule
  ],
})
export class GamesModuleModule { }
