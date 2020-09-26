import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// services
import { HttpClientModule } from '@angular/common/http';
import { LayoutModuleRoutingModule } from './layout-routing.module';
// components
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutModuleRoutingModule,
    HttpClientModule
  ],

})
export class LayoutModuleModule { }
