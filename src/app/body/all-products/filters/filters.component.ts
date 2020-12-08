import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product.model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Options } from '@angular-slider/ngx-slider';
import { DropDownOption, sortDropDownOptions } from './sort-options';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  private products: Product[];
  public form: FormGroup;
  public categories: string[];
  public brands: string[];
  public rating = Array(5).fill('');
  public sliderOptions: Options;
  public sortValue = 'Select';
  public sortOptions: DropDownOption[] = sortDropDownOptions;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.products.getValue();
    this.categories = this.getUniqueCategories();
    this.brands = this.getBrandsFromProducts();
    this.form = this.getForm();
    this.subscribeToForm();
    this.sliderOptions = this.initRangeSliderOptions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getForm(): FormGroup {
    return new FormGroup({
      categories: new FormControl(''),
      brands: new FormArray(this.brands.map(brand => new FormControl(false))),
      rating: new FormArray(this.rating.map(rate => new FormControl(false))),
      price: new FormGroup({
        minPrice: new FormControl(Math.floor(this.getMinPrice(this.products))),
        maxPrice: new FormControl(Math.ceil(this.getMaxPrice(this.products)))
      })
    });
  }

  // subscribers
  private subscribeToForm(): void {
    this.form.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(val => {
      this.filter();
    });
  }

  private initRangeSliderOptions(): Options {
    return {
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
    this.sortValue = 'Select';
    this.form = this.getForm();
    this.subscribeToForm();
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
