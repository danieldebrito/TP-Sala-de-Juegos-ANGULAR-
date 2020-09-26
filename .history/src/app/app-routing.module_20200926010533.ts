import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth/pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./auth/pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'verification-email',
    loadChildren: () => import('./auth/pages/send-email/send-email.module').then(m => m.SendEmailModule)
  },
  {
    path: 'pass-email-incorrecto',
    loadChildren: () => import('./auth/pages/user-pass-incorrecto/user-pass-incorrecto.module').then(m => m.UserPassIncorrectoModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'juegos',
    loadChildren: () => import('./games/components/board/board.component').then(m => m.BoardComponent),
    children:
      [{
        path: '',
        loadChildren: () => import('./games/components/layout/layout.component').then(m => m.LayoutComponent),
      },
      { path: 'Adivina', component: AdivinaElNumeroComponent },
      { path: 'AdivinaMasListado', component: AdivinaMasListadoComponent },
      { path: 'AgilidadaMasListado', component: AgilidadMasListadoComponent },
      { path: 'Agilidad', component: AgilidadAritmeticaComponent }]
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
