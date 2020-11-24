import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { NavComponent } from './header/nav/nav.component';
import { BreadCrumbsComponent } from './header/bread-crumbs/bread-crumbs.component';
import { SearchComponent } from './header/search/search.component';
import { HeaderProfileComponent } from './header/header-profile/header-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTopComponent,
    NavComponent,
    BreadCrumbsComponent,
    SearchComponent,
    HeaderProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
