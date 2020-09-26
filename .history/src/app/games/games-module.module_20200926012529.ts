import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// ******************************** ROUTING ****************************************** //
import { GamesModuleRoutingModule } from './games-module-routing.module';
// ******************************** COMPONENTS ****************************************** //
import { BoardComponent } from './components/board/board.component';
// ******************************** PAGES ****************************************** //
import { AdivinaModule } from './pages/adivina/adivina.module';
import { AgilidadModule } from './pages/agilidad/agilidad.module';


@NgModule({
  declarations: [
    BoardComponent,
    AdivinaModule,
  ],
  imports: [
    CommonModule,
    GamesModuleRoutingModule,
    AgilidadModule
  ]
})
export class GamesModuleModule { }
