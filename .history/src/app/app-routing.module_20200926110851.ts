import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
  /*
  {
    path: 'juegos',
    loadChildren: () => import('./games/components/board/board.module').then(m => m.BoardModule),
  },*/
  {
    path: 'layout',
    loadChildren: () => import('./games/components/layout/layout-module.module').then(m => m.LayoutModuleModule),
  },
  /*
    children: [{
      path: 'adivina',
      loadChildren: () => import('./games/pages/adivina/adivina.module').then(m => m.AdivinaModule),
    }]
  }*/
  /*{
    path: 'juegos',
    loadChildren: () => import('./games/components/board/board.module').then(m => m.BoardModule),
    children:
      [{
        path: '',
        pathMatch: 'full',
        redirectTo : 'layout',

        // loadChildren: () => import('./games/components/layout/layout-module.module').then(m => m.LayoutModuleModule),
      },
      /*
      {
        path: 'adivina',
        loadChildren: () => import('./games/pages/adivina/adivina.module').then(m => m.AdivinaModule),
      },
      ]
  }*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
