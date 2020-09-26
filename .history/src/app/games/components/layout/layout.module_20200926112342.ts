import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModuleRoutingModule } from './layout-module-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutModuleRoutingModule
  ]
})
export class LayoutModuleModule { }
