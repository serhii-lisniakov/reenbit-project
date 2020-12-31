import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../services/cart.service';
import { BehaviorSubject } from 'rxjs';
import { WishlistService } from '../../../services/wishlist.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() orderList: BehaviorSubject<Product[]>;
  public productRating: string[];
  public isProductInWishlist: boolean;

  constructor(
    private cartService: CartService,
    private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.productRating = this.setProductsRating(this.product.rating);
    this.checkIfProductInWishlist();
  }

  private setProductsRating(rating: number): string[] {
    return Array(5).fill('star').map((item, i) => i < rating ? 'star-full' : 'star');
  }

  public deleteProductFromCart(product: Product): void {
    this.cartService.deleteProductFromCart(product);
  }

  public onCountChange(): boolean {
    return false;
  }

  public handleCount(operator: number): void {
    this.product.count += operator;
    if (this.product.count === 0) {
      this.product.count = 1;
    }
    if (this.product.count > this.product.stock) {
      this.product.count = this.product.stock;
    }
    this.orderList.next(this.orderList.value);
    this.cartService.postOrderList(this.orderList.value);
  }

  public addProductToWishlist(): void {
    this.isProductInWishlist = !this.isProductInWishlist;
    this.wishlistService.toggleProductToWishlist(this.product);
  }

  private checkIfProductInWishlist(): void {
    this.wishlistService.checkIfProductInWishlist(this.product).then((ifExist: boolean) => {
      this.isProductInWishlist = ifExist;
    });
  }
}
