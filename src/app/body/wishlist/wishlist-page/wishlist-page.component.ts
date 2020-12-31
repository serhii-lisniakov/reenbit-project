import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { WishlistService } from '../../../services/wishlist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss']
})
export class WishlistPageComponent implements OnInit {
  public wishlist: Product[];

  constructor(
    private wishlistService: WishlistService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.wishlist = this.route.snapshot.data.data;
  }

  public removeWish(wish: Product): void {
    this.wishlistService.toggleProductToWishlist(wish);
    this.wishlist = this.wishlist.filter((item: Product) => item.id !== wish.id);
  }
}
