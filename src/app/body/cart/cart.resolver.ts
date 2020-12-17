import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';


@Injectable()
export class CartResolver implements Resolve<Promise<Product[]>> {
  constructor(private cartService: CartService) {}

  resolve(): Promise<Product[]> {
    return this.cartService.getOrderList();
  }
}
