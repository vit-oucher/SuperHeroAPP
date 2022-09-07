import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {
    path: '',
    component:LoginPageComponent,
  }
];

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class LoginPageModule { }
