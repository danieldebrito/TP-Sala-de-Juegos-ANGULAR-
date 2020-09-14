/*
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from 'src/app/grid_cards/aa-board/aa-board.component';
import { MenuCardsComponent } from './menu-cards/menu-cards.component';

import { AdivinaComponent } from './juegos/adivina/adivina.component';
import { AgilidadComponent } from './juegos/agilidad/agilidad.component';
import { AnagramaComponent } from './juegos/anagrama/anagrama.component';
import { CasacaComponent } from './juegos/casaca/casaca.component';
import { MemotestComponent } from './juegos/memotest/memotest.component';
import { PptComponent } from './juegos/ppt/ppt.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';

const routes: Routes = [
  { path: 'jua', component: BoardComponent },
  {
    path: 'Juegos',
    component: BoardComponent,
    children: [
      { path: '', component: MenuCardsComponent },
      { path: 'Adivina', component: AdivinaComponent },
      { path: 'Agilidad', component: AgilidadComponent },
      { path: 'Anagrama', component: AnagramaComponent },
      { path: 'Casaca', component: CasacaComponent },
      { path: 'Memotest', component: MemotestComponent },
      { path: 'Ppt', component: PptComponent },
      { path: 'Tateti', component: TatetiComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridCardsRoutingModule { }
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'verification-email', component: SendEmailComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
