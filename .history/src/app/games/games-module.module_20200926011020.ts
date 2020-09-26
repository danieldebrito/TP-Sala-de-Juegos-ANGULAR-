import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ******************************** ROUTING ****************************************** //
import { GamesModuleRoutingModule } from './games-module-routing.module';
// ******************************** COMPONENTS ****************************************** //
import { BoardComponent } from './components/board/board.component';
import { LayoutComponent } from './components/layout/layout.component';
// ******************************** PAGES ****************************************** //
import { AdivinaComponent } from './pages/adivina/adivina.component';
import { AgilidadModule } from './pages/agilidad/agilidad.module';


@NgModule({
  declarations: [
    BoardComponent,
    LayoutComponent,
    AdivinaComponent,
  ],
  imports: [
    CommonModule,
    GamesModuleRoutingModule,
    AgilidadModule
  ]
})
export class GamesModuleModule { }
