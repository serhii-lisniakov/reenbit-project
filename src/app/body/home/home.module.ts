import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './homepage/home.component';
import {SharedModule} from '../../shared/shared.module';
import { GoogleButtonComponent } from './google-button/google-button.component';


@NgModule({
  declarations: [
    HomeComponent,
    GoogleButtonComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ]
})
export class HomeModule { }
