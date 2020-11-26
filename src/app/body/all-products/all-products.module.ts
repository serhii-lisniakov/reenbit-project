import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { FiltersComponent } from './filters/filters.component';


@NgModule({
  declarations: [
    AllProductsComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    AllProductsRoutingModule
  ]
})
export class AllProductsModule { }
