import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { WishlistService } from '../../../services/wishlist.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() wishlist: boolean;
  public productRating: string[];
  public isProductInWishlist: boolean;

  constructor(
    private wishlistService: WishlistService,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.productRating = this.setProductsRating(this.product.rating);
    this.isProductInWishlist = this.checkIfProductInWishlist();
  }

  private setProductsRating(rating: number): string[] {
    return Array(5).fill('star').map((item, i) => i < rating ? 'star-black' : 'star');
  }

  public addProductToWishlist(): void {
    this.isProductInWishlist = !this.isProductInWishlist;
    this.wishlistService.toggleProductToWishlist(this.product);
  }

  public checkIfProductInWishlist(): boolean {
    return this.wishlistService.wishList.value.some((item: Product) => item.id === this.product.id);
  }
}
