import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { WishlistService } from '../../../services/wishlist.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-wishlist-page',
  templateUrl: './wishlist-page.component.html',
  styleUrls: ['./wishlist-page.component.scss']
})
export class WishlistPageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public wishlist: Product[];

  constructor(private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.subscribeToWishlist();
  }

  private subscribeToWishlist(): void {
    this.wishlistService.wishList.pipe(takeUntil(this.destroy$))
      .subscribe((wishlist: Product[]) => this.wishlist = wishlist);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
