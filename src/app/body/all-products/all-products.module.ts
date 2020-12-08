import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products.component';
import { FiltersComponent } from './filters/filters.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    AllProductsComponent,
    FiltersComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    AllProductsRoutingModule,
    SharedModule,
    NgxPaginationModule,
    NgxSliderModule,
  ]
})
export class AllProductsModule { }
