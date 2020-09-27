import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnagramaComponent } from './anagrama.component';
import { AnagramaRoutingModule } from './anagrama-routing.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [AnagramaComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AnagramaRoutingModule
  ]
})
export class AnagramaModule { }
