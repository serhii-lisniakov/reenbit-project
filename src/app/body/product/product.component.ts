import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BreadCrumbsService } from '../../services/bread-crumbs.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public product: Product;
  public productRating: string[];
  public productCount: FormControl = new FormControl(1);
  public proposals: Product[];
  public isNotification = false;
  public isProductInWishlist: boolean;

  constructor(
    private productService: ProductService,
    private breadCrumbsService: BreadCrumbsService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private wishlistService: WishlistService) { }

  async ngOnInit(): Promise<void> {
    this.getProduct();
    await this.wishlistService.getWishlist().then();
    this.subscribeToRouteChanges();
    this.breadCrumbsService.title.next(this.product.title);
    this.isProductInWishlist = this.checkIfProductInWishlist();
  }

  private subscribeToRouteChanges(): void {
    this.router.events.pipe(
      takeUntil(this.destroy$)
    ).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.productCount.setValue(1);
        this.getProduct();
        this.isProductInWishlist = this.checkIfProductInWishlist();
        this.breadCrumbsService.title.next(this.product.title);
      }
    });
  }

  private getProduct(): void {
    const [product, products] = this.route.snapshot.data.data;
    this.product = product;
    this.productRating = this.getProductsRating(this.product.rating);
    this.proposals = this.getRandomProposals(products);
  }

  private getProductsRating(rating: number): string[] {
    return Array(5).fill('star').map((item, i) => i < rating ? 'star-black' : 'star');
  }

  private getRandomProposals(products: Product[]): Product[] {
    const randomProposals = [];
    for (let i = 0; i < 4; i++) {
      randomProposals.push(products[Math.floor(Math.random() * products.length)]);
    }
    return randomProposals;
  }

  public addProductToCart(): void {
    if (!JSON.parse(localStorage.getItem('freshnesecomUser'))) {
      this.authService.onProductButtonClick.next(true);
      return;
    }
    this.isNotification = true;
    const product = JSON.parse(JSON.stringify(this.product));
    product.count = this.productCount.value;
    this.cartService.addProductToCart(product).then();
    setTimeout(() => this.isNotification = false, 800);
  }

  public handleCount(operator: number): void {
    this.productCount.setValue(this.productCount.value + operator);
    if (this.productCount.value === 0) {
      this.productCount.setValue(1);
    }
    if (this.productCount.value > this.product.stock) {
      this.productCount.setValue(this.product.stock);
    }
  }

  public addToWishlist(): void {
    this.isProductInWishlist = !this.isProductInWishlist;
    this.wishlistService.toggleProductToWishlist(this.product);
  }

  public checkIfProductInWishlist(): boolean {
    return this.wishlistService.wishList.value.some((item: Product) => item.id === this.product.id);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
