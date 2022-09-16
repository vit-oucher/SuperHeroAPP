import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {RouterModule, Routes} from "@angular/router";
import {HeaderHomePageModule} from "../../components/header-home-page/header-home-page.module";
import {SearchModule} from "../../components/search/search.module";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  }
];

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HeaderHomePageModule,
    SearchModule,
    ReactiveFormsModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
