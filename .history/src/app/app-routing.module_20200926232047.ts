import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './games/components/board/board.component';

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
  {
    path: 'juegos',
    // loadChildren: () => import('./games/components/board/board.module').then(m => m.BoardModule),
    component: BoardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./games/components/layout-games/layout.module').then(m => m.LayoutModuleModule),
      },
      {
        path: 'adivina',
        loadChildren: () => import('./games/pages/adivina/adivina.module').then(m => m.AdivinaModule),
      },
      {
        path: 'agilidad',
        loadChildren: () => import('./games/pages/agilidad/agilidad.module').then(m => m.AgilidadModule),
      }
      ,
      {
        path: 'ppt',
        loadChildren: () => import('./games/pages/ppt/ppt.module').then(m => m.PptModule),
      }
      ,
      {
        path: 'tateti',
        loadChildren: () => import('./games/pages/tateti/tateti.module').then(m => m.TatetiModule),
      }
      ,
      {
        path: 'anagrama',
        loadChildren: () => import('./games/pages/anagrama/anagrama.module').then(m => m.AnagramaModule),
      }
      ,
      {
        path: 'memotest',
        loadChildren: () => import('./games/pages/memotest/memotest.module').then(m => m.MemotestModule),
      }
      ,
      {
        path: 'casaca',
        loadChildren: () => import('./games/pages/casaca/casaca.module').then(m => m.CasacaModule),
      }
    ]
  }
  ,
  {
    path: 'ranking',
    loadChildren: () => import('./games/components/jugadas-listado/jugadas-listado.module').then(m => m.JugadasListadoModule),
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



/*
{
  path: 'juegos',
  component: BoardComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    component: LayoutComponent,
  }],
},
*/

/*
{
path: 'juegos',
loadChildren: () => import('./games/components/board/board.module').then(m => m.BoardModule),
},
*/
/*
 {
   path: 'layout',
   loadChildren: () => import('./games/components/layout/layout.module').then(m => m.LayoutModuleModule),
 },
 */
/*
{
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
    */
/*
 ]
}*/

/*
  {
  path: 'layout',
  // loadChildren: () => import('./games/components/layout/layout.module').then(m => m.LayoutModuleModule),
  component: LayoutComponent,
},
{
  path: 'juegos',
  component: BoardComponent
},
*/
