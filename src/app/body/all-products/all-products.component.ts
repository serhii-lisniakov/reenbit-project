import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { WishlistService } from '../../services/wishlist.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public products: Product[];
  public page: number;
  public productsToShow = 5;
  public productsCount: number;

  constructor(private productService: ProductService,
              private wishlistService: WishlistService) { }

  async ngOnInit(): Promise<void> {
    await this.wishlistService.getWishlist().then();
    this.subscribeToProducts();
    this.productsCount = this.products?.length || 0;
  }

  private subscribeToProducts(): void {
    this.productService.products.pipe(takeUntil(this.destroy$))
      .subscribe((products: Product[]) => this.products = products);
  }

  showMoreProducts(): void {
    this.productsToShow += 5;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


