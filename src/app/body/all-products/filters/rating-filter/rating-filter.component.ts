import { Component, ElementRef, OnInit } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-rating-filter',
  templateUrl: './rating-filter.component.html',
  styleUrls: ['./rating-filter.component.scss']
})
export class RatingFilterComponent implements OnInit {
  private products: Product[];
  public labels = Array(5);

  constructor(private productService: ProductService,
              private element: ElementRef) { }

  ngOnInit(): void {
    this.products = this.productService.products.getValue();
  }

  public filter(e): void {
    const checkedFilters = [];
    [...this.element.nativeElement.children].map(child => {
      if (child.control.checked) {
        checkedFilters.push(child.dataset.rating);
      }
    });
    this.productService.filterByRating(checkedFilters);
  }
}
