import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  public selectedValue = 'Select';
  public options = [
    {value: 'price', operator: '-', label: 'Price: Low to High'},
    {value: 'price', operator: '+', label: 'Price: High to Low'},
    {value: 'rating', operator: '-', label: 'Rating: Low to High'},
    {value: 'rating', operator: '+', label: 'Rating: High to Low'},
  ];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  public sort(condition): void {
    this.productService.sorting(condition);
  }
}
