import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page.component';
import {RouterModule, Routes} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {
    path: '',
    component:RegisterPageComponent,
  }
];

@NgModule({
  declarations: [
    RegisterPageComponent
  ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatIconModule
    ]
})
export class RegisterPageModule { }
