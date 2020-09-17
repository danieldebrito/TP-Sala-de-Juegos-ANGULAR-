import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AboutComponent } from 'src/app/layout/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
