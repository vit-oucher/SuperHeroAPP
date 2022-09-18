import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./core/pages/home-page/home-page.component";

const routes: Routes = [
  {
    path: 'Home',
    loadChildren: () => import('./core/pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'Login',
    loadChildren: () => import('./core/pages/login-page/login-page.module').then(m => m.LoginPageModule)
  },
  {
    path: 'Register',
    loadChildren: () => import('./core/pages/register-page/register-page.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'User',
    loadChildren: () => import('./core/pages/user-page/user-page.module').then(m => m.UserPageModule)
  },
  {
    path: 'Battle',
    loadChildren: () => import('./core/pages/battles-page/battles-page.module').then(m => m.BattlesPageModule)
  },
  {
    path: 'Hero-detail/:id',
    loadChildren: () => import('./core/pages/hero-detail-page/hero-detail-page.module').then(m => m.HeroDetailPageModule)
  },
  {
    path: '**',
    redirectTo: 'Home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
