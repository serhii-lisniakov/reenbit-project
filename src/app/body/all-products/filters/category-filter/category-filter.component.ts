import { Component, ElementRef, OnInit } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.scss']
})
export class CategoryFilterComponent implements OnInit {
  private products: Product[];
  public categories: string[];

  constructor(private productService: ProductService,
              private element: ElementRef) { }

  ngOnInit(): void {
    this.products = this.productService.products.getValue();
    this.categories = this.getUniqueCategories();
  }

  private getAllCategoriesFromProducts(): string[] {
    const categories = [];
    this.products.map(product => categories.push(product.category.toLowerCase()));
    return categories;
  }

  private getUniqueCategories(): string[] {
    const categories = this.getAllCategoriesFromProducts();
    return Array.from(new Set(categories));
  }

  public getCategoryCount(category): number {
    let count = 0;
    const categories = this.getAllCategoriesFromProducts();
    categories.map(mapCategory => mapCategory === category ? count += 1 : null);
    return count;
  }

  public filter(e, category): void {
    e.preventDefault();
    [...this.element.nativeElement.children].forEach(child => child.classList.remove('active'));
    e.target.classList.add('active');
    this.productService.filterByCategory(category);
  }

}
