import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ******************************** ROUTING ****************************************** //
import { GamesModuleRoutingModule } from './games-module-routing.module';
// ******************************** COMPONENTS ****************************************** //
import { BoardComponent } from './components/board/board.component';
import { LayoutModuleModule } from './components/layout/layout-module.module';
// ******************************** PAGES ****************************************** //
import { AdivinaModule } from './pages/adivina/adivina.module';
import { AgilidadModule } from './pages/agilidad/agilidad.module';


@NgModule({
  declarations: [
    BoardComponent,
  ],
  imports: [
    CommonModule,
    GamesModuleRoutingModule,
    AgilidadModule,
    AdivinaModule,
    LayoutModuleModule
  ]
})
export class GamesModuleModule { }
