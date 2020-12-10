import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BreadCrumbsService } from '../../services/bread-crumbs.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product: Product;
  public productRating: string[];
  public proposals: Product[];

  constructor(private productService: ProductService,
              private breadCrumbsService: BreadCrumbsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getProduct();
    this.subscribeToRouteChanges();
    this.breadCrumbsService.title.next(this.product.title);
  }

  private subscribeToRouteChanges(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.getProduct();
        this.breadCrumbsService.title.next(this.product.title);
      }
    });
  }

  private getProduct(): void {
    const [product, products] = this.route.snapshot.data.data;
    this.product = product;
    this.productRating = this.setProductsRating(this.product.rating);
    this.proposals = this.getRandomProposals(products);
  }

  private setProductsRating(rating: number): string[] {
    return Array(5).fill('star').map((item, i) => i < rating ? 'star-black' : 'star');
  }

  private getRandomProposals(products: Product[]): Product[] {
    const randomProposals = [];
    for (let i = 0; i < 4; i++) {
      randomProposals.push(products[Math.floor(Math.random() * products.length)]);
    }
    return randomProposals;
  }
}
