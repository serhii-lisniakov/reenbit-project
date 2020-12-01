import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public product: Product;
  public productRating: string[];
  public proposals: Product[];

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscribeToRouteChanges();
    this.product = this.productService.product;
    this.productRating = this.setProductsRating(this.product.rating);
    this.proposals = this.getRandomProposals();
  }

  private subscribeToRouteChanges(): void {
    this.route.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params: Params) => {
      this.product = this.productService.product;
    });
  }

  private setProductsRating(rating: number): string[] {
    return Array(5).fill('star').map((item, i) => i < rating ? 'star-black' : 'star');
  }

  private getRandomProposals(): Product[] {
    function getRandomNumber(min, max): number {
      return Math.floor(Math.random() * (max - min) + min);
    }
    const randomProposals = [];
    for (let i = 0; i < 4; i++) {
      randomProposals.push(this.productService.products[getRandomNumber(0, this.productService.products.length)]);
    }
    return randomProposals;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
