import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

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
  public mobileFilters = false;

  constructor(
    private productService: ProductService,
    private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.subscribeToProducts();
    this.productsCount = this.products?.length || 0;
    this.subscribeToBreakpoint();
  }

  private subscribeToProducts(): void {
    this.productService.products.pipe(takeUntil(this.destroy$))
      .subscribe((products: Product[]) => this.products = products);
  }

  public showMoreProducts(): void {
    this.productsToShow += 5;
  }

  private subscribeToBreakpoint(): void {
    this.breakpointObserver.observe('(max-width: 1120px)')
      .pipe(takeUntil(this.destroy$))
      .subscribe((state: BreakpointState) => {
        this.mobileFilters = state.matches;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}


