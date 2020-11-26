import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { NavComponent } from './nav/nav.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { SearchComponent } from './search/search.component';
import { HeaderProfileComponent } from './header-profile/header-profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderTopComponent,
    NavComponent,
    BreadCrumbsComponent,
    SearchComponent,
    HeaderProfileComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
