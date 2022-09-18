import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHomePageComponent } from './header-home-page.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        HeaderHomePageComponent
    ],
    exports: [
        HeaderHomePageComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        RouterLink
    ]
})
export class HeaderHomePageModule { }
