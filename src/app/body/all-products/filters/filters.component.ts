import {Component, ElementRef, OnInit} from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  private products: Product[];
  public form: FormGroup;
  public categories: string[];
  public brands: string[];
  public rating = Array(5);
  public minPrice: number;
  public maxPrice: number;
  public sliderOptions: Options;
  public selectedValue = 'Select';
  public sortOptions = [
    {value: 'price', operator: '-', label: 'Price: Low to High'},
    {value: 'price', operator: '+', label: 'Price: High to Low'},
    {value: 'rating', operator: '-', label: 'Rating: Low to High'},
    {value: 'rating', operator: '+', label: 'Rating: High to Low'},
  ];

  constructor(private productService: ProductService,
              private element: ElementRef) { }

  ngOnInit(): void {
    this.products = this.productService.products.getValue();
    this.categories = this.getUniqueCategories();
    this.brands = this.getBrandsFromProducts();
    this.minPrice = Math.floor(this.getMinPrice(this.products));
    this.maxPrice = Math.ceil(this.getMaxPrice(this.products));
    this.sliderOptions = {
      floor: this.minPrice,
      ceil: this.maxPrice,
      step: 1
    };
    this.form = new FormGroup({
      categories: new FormControl(''),
      brands: new FormArray([]),
      rating: new FormArray([]),
      price: new FormArray([])
    });
  }

  // sorting
  public sort(condition): void {
    this.productService.sorting(condition);
  }

  // filter
  public filter(): void {
    this.productService.filter(this.form.value);
  }

  // reset
  public reset(): void {
    this.selectedValue = 'Select';
    this.element.nativeElement.querySelectorAll('input').forEach(input => input.checked = false);
    this.minPrice = this.getMinPrice(this.products);
    this.maxPrice = this.getMaxPrice(this.products);
    this.productService.reset();
  }

  // categories
  private getAllCategoriesFromProducts(): string[] {
    const categories = [];
    this.products.map(product => categories.push(product.category.toLowerCase()));
    return categories;
  }

  private getUniqueCategories(): string[] {
    const categories = this.getAllCategoriesFromProducts();
    return Array.from(new Set(categories));
  }

  public getCategoryAmount(category): number {
    let count = 0;
    const categories = this.getAllCategoriesFromProducts();
    categories.map(mapCategory => mapCategory === category ? count += 1 : null);
    return count;
  }

  // brands
  private getBrandsFromProducts(): string[] {
    const brands = [];
    this.products.map(product => brands.push(product.farm.toLowerCase()));
    return Array.from(new Set(brands));
  }

  public onBrandsCheckboxChange(e): void {
    const brands: FormArray = this.form.get('brands') as FormArray;
    if (e.target.checked) {
      brands.push(new FormControl(e.target.value));
    } else {
      brands.value.forEach((brand, i) => {
        if (brand === e.target.value.toLowerCase()) {
          brands.removeAt(i);
          return;
        }
      });
    }
  }

  // rating
  public onRatingCheckboxChange(e): void {
    const rating: FormArray = this.form.get('rating') as FormArray;
    if (e.target.checked) {
      rating.push(new FormControl(e.target.value));
    } else {
      rating.value.forEach((rate, i) => {
        if (rate === e.target.value.toLowerCase()) {
          rating.removeAt(i);
          return;
        }
      });
    }
  }

  // price
  private getMinPrice(products): number {
    return products.reduce((acc, product) => acc < product.price ? acc : product.price);
  }

  private getMaxPrice(products): number {
    return products.reduce((acc, product) => acc > product.price ? acc : product.price);
  }

  public onPriceFilterClick(): void {
    const price: FormArray = this.form.get('price') as FormArray;
    price.clear();
    price.push(new FormControl(this.minPrice));
    price.push(new FormControl(this.maxPrice));
    this.filter();
  }
}
