import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CartComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule
  ]
})
export class CartModule { }
