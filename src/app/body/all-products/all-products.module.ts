import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    AllProductsComponent,
    FiltersComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    AllProductsRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSliderModule
  ]
})
export class AllProductsModule { }
