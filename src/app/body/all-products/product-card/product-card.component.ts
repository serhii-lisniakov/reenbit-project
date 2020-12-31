import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { WishlistService } from '../../../services/wishlist.service';
import { AuthService } from '../../../services/auth.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() wishlist: boolean;
  @Output() wishDelete = new EventEmitter<Product>();
  public productRating: string[];
  public isProductInWishlist: boolean;
  public userId: string;

  constructor(
    private wishlistService: WishlistService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.productRating = this.setProductsRating(this.product.rating);
    this.checkIfProductInWishlist();
    this.userId = this.authService.user.value.id;
  }

  private checkIfProductInWishlist(): void {
    this.wishlistService.checkIfProductInWishlist(this.product).then((ifExist: boolean) => {
      this.isProductInWishlist = ifExist;
    });
  }

  private setProductsRating(rating: number): string[] {
    return Array(5).fill('star').map((item, i) => i < rating ? 'star-black' : 'star');
  }

  public addProductToWishlist(): void {
    this.isProductInWishlist = !this.isProductInWishlist;
    this.wishlistService.toggleProductToWishlist(this.product);
  }

  public removeWish(wish: Product): void {
    this.wishDelete.emit(wish);
  }

}
