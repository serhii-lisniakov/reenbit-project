import { Component, OnInit } from '@angular/core';
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
  public isCheckboxChecked = false;
  public sliderOptions: Options;
  public selectedValue = 'Select';
  public sortOptions = [
    {value: 'price', operator: '-', label: 'Price: Low to High'},
    {value: 'price', operator: '+', label: 'Price: High to Low'},
    {value: 'rating', operator: '-', label: 'Rating: Low to High'},
    {value: 'rating', operator: '+', label: 'Rating: High to Low'},
  ];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.products.getValue();
    this.categories = this.getUniqueCategories();
    this.brands = this.getBrandsFromProducts();
    this.form = this.getForm();
    this.initRangeSliderOptions();
  }

  private getForm(): FormGroup {
    return new FormGroup({
      categories: new FormControl(''),
      brands: new FormArray([]),
      rating: new FormArray([]),
      price: new FormGroup({
        minPrice: new FormControl(Math.floor(this.getMinPrice(this.products))),
        maxPrice: new FormControl(Math.ceil(this.getMaxPrice(this.products)))
      })
    });
  }

  private initRangeSliderOptions(): void {
    this.sliderOptions = {
      floor: this.form.controls.price.value.minPrice,
      ceil: this.form.controls.price.value.maxPrice,
      step: 1
    };
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
    this.isCheckboxChecked = false;
    this.selectedValue = 'Select';
    this.form = this.getForm();
    this.productService.reset();
  }

  // categories
  private getAllCategoriesFromProducts(): string[] {
    return this.products.map(product => product.category.toLowerCase());
  }

  private getUniqueCategories(): string[] {
    const categories = this.getAllCategoriesFromProducts();
    return Array.from(new Set(categories));
  }

  public getCategoryAmount(category: string): number {
    let count = 0;
    const categories = this.getAllCategoriesFromProducts();
    categories.map(mapCategory => mapCategory === category ? count += 1 : null);
    return count;
  }

  // brands
  private getBrandsFromProducts(): string[] {
    const brands = this.products.map(product => product.farm.toLowerCase());
    return Array.from(new Set(brands));
  }

  public onBrandsCheckboxChange(e: Event): void {
    this.isCheckboxChecked = false;
    const brands: FormArray = this.form.get('brands') as FormArray;
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      brands.push(new FormControl(target.value));
    } else {
      brands.value.forEach((brand, i) => {
        if (brand === target.value.toLowerCase()) {
          brands.removeAt(i);
          return;
        }
      });
    }
  }

  // rating
  public onRatingCheckboxChange(e: Event): void {
    this.isCheckboxChecked = false;
    const rating: FormArray = this.form.get('rating') as FormArray;
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      rating.push(new FormControl(target.value));
    } else {
      rating.value.forEach((rate, i) => {
        if (rate === target.value.toLowerCase()) {
          rating.removeAt(i);
          return;
        }
      });
    }
  }

  // price
  private getMinPrice(products: Product[]): number {
    return products.reduce((acc, product) => acc < product.price ? acc : product.price, 1);
  }

  private getMaxPrice(products: Product[]): number {
    return products.reduce((acc, product) => acc > product.price ? acc : product.price, 1);
  }
}
