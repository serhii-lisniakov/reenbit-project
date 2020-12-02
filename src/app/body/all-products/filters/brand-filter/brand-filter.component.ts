import { Component, ElementRef, OnInit } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.scss']
})
export class BrandFilterComponent implements OnInit {
  private products: Product[];
  public brands: string[];

  constructor(private productService: ProductService,
              private element: ElementRef) { }

  ngOnInit(): void {
    this.products = this.productService.products.getValue();
    this.brands = this.getBrandsFromProducts();
  }

  private getBrandsFromProducts(): string[] {
    const brands = [];
    this.products.map(product => brands.push(product.farm.toLowerCase()));
    return Array.from(new Set(brands));
  }

  public filter(e): void {
    const checkedFilters = [];
    [...this.element.nativeElement.children].map(child => {
      if (child.firstChild.checked) {
        checkedFilters.push(child.innerText.replace(/\s/g, '').toLowerCase());
      }
    });
    this.productService.filterByBrand(checkedFilters);
    e.target.classList.toggle('active');
  }

}
