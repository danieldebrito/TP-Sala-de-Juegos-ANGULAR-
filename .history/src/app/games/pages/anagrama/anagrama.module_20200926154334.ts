import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnagramaComponent } from './anagrama.component';

import { AnagramaRoutingModule } from './anagrama-routing.module';

@NgModule({
  declarations: [AnagramaComponent],
  imports: [
    CommonModule
  ]
})
export class AnagramaModule { }
