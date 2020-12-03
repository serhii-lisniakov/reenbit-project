import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CategoryFilterComponent } from './filters/category-filter/category-filter.component';
import { BrandFilterComponent } from './filters/brand-filter/brand-filter.component';
import { RatingFilterComponent } from './filters/rating-filter/rating-filter.component';
import { PriceFilterComponent } from './filters/price-filter/price-filter.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {NgxSliderModule} from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    AllProductsComponent,
    FiltersComponent,
    ProductCardComponent,
    CategoryFilterComponent,
    BrandFilterComponent,
    RatingFilterComponent,
    PriceFilterComponent
  ],
  imports: [
    CommonModule,
    AllProductsRoutingModule,
    NgxPaginationModule,
    FormsModule,
    NgxSliderModule
  ]
})
export class AllProductsModule { }
