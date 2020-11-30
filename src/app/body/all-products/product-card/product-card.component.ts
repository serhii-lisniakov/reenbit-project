import {Component, Input, OnInit} from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  public productRating: string[];
  constructor() { }

  ngOnInit(): void {
    this.productRating = this.setProductsRating(this.product.rating);
  }

  private setProductsRating(rating: number): string[] {
    return Array(5).fill('star').map((item, i) => i < rating ? 'star-black' : 'star');
  }

}
