import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { NavComponent } from './nav/nav.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { SearchComponent } from './search/search.component';
import { HeaderProfileComponent } from './header-profile/header-profile.component';
import { RouterModule } from '@angular/router';
import { GoogleButtonComponent } from './header-profile/google-button/google-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FacebookButtonComponent } from './header-profile/facebook-button/facebook-button.component';
import { HeaderMobileComponent } from './header-mobile/header-mobile.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderTopComponent,
    NavComponent,
    BreadCrumbsComponent,
    SearchComponent,
    HeaderProfileComponent,
    GoogleButtonComponent,
    FacebookButtonComponent,
    HeaderMobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
