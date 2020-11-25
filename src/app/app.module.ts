import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderTopComponent } from './header/header-top/header-top.component';
import { NavComponent } from './header/nav/nav.component';
import { BreadCrumbsComponent } from './header/bread-crumbs/bread-crumbs.component';
import { SearchComponent } from './header/search/search.component';
import { HeaderProfileComponent } from './header/header-profile/header-profile.component';
import { BodyComponent } from './body/body.component';
import { AllProductsComponent } from './body/all-products/all-products.component';
import { ProductComponent } from './body/product/product.component';
import { FiltersComponent } from './body/filters/filters.component';
import { FooterComponent } from './footer/footer.component';
import { FooterNavComponent } from './footer/footer-nav/footer-nav.component';
import { FooterTagsComponent } from './footer/footer-tags/footer-tags.component';
import { BasketComponent } from './body/basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderTopComponent,
    NavComponent,
    BreadCrumbsComponent,
    SearchComponent,
    HeaderProfileComponent,
    BodyComponent,
    AllProductsComponent,
    ProductComponent,
    FiltersComponent,
    FooterComponent,
    FooterNavComponent,
    FooterTagsComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
