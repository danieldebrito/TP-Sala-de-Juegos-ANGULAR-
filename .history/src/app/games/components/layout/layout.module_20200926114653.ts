import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModuleRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutModuleRoutingModule
  ],
  exports: [
  ]
})
export class LayoutModuleModule { }
