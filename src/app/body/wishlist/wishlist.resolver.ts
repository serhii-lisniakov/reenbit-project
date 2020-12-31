import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Product } from '../../models/product.model';
import { WishlistService } from '../../services/wishlist.service';


@Injectable()
export class WishlistResolver implements Resolve<Promise<Product[]>> {
  constructor(private wishlistService: WishlistService) {}

  resolve(): Promise<Product[]> {
    return this.wishlistService.getWishlist();
  }
}
