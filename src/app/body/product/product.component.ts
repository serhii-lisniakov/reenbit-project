import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product: Product;
  public productRating: string[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.snapshot.data.data.then(product => {
      this.product = product;
      this.productRating = this.setProductsRating(this.product.rating);
    });
  }

  private setProductsRating(rating: number): string[] {
    return Array(5).fill('star').map((item, i) => i < rating ? 'star-black' : 'star');
  }
}
