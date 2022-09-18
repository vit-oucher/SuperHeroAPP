import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailPageComponent } from './hero-detail-page.component';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "../home-page/home-page.component";

const routes: Routes = [
  {
    path: '',
    component: HeroDetailPageComponent,
  }
];

@NgModule({
  declarations: [
    HeroDetailPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,

  ],
  exports: [
    HeroDetailPageComponent
  ]
})
export class HeroDetailPageModule { }
