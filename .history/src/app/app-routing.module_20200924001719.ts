import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AboutComponent } from 'src/app/layout/about/about.component';
// import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //   { path: '**', component: PageNotFoundComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
