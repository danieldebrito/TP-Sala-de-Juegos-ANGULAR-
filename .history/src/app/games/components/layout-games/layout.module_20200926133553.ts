import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModuleRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutModuleRoutingModule,
    HttpClientModule
  ],

})
export class LayoutModuleModule { }
