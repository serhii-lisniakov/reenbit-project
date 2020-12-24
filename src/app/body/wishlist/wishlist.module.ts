import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { SharedModule } from '../../shared/shared.module';
import { WishlistRoutingModule } from './wishlist-routing.module';
import {AllProductsModule} from '../all-products/all-products.module';



@NgModule({
  declarations: [
    WishlistPageComponent
  ],
    imports: [
        CommonModule,
        WishlistRoutingModule,
        SharedModule,
        AllProductsModule
    ]
})
export class WishlistModule { }
