import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';
import { FilterForm } from '../models/filter-form.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private originProducts: Product[];
  public products = new BehaviorSubject([]);
  constructor(private db: AngularFireDatabase) { }

  public getProducts(): Promise<any[]> {
    return new Promise((resolve) => {
      this.db.database.ref(`products`).once('value').then(snapshot => {
        this.originProducts = snapshot.val();
        this.products.next(snapshot.val());
        resolve(snapshot.val());
      });
    });
  }

  public getProductById(id: number): Promise<any> {
    return new Promise((resolve) => {
      this.db.database.ref(`products/${id}`).once('value').then(snapshot => {
        resolve(snapshot.val());
      });
    });
  }

  public sorting(condition): void {
    const sortedProducts = this.products.getValue().sort((a, b) => {
      return eval(`${condition.operator === '-' ? 'a.' : 'b.'}${condition.value}
                      -
                      ${condition.operator === '+' ? 'a.' : 'b.'}${condition.value}`);
    });
    this.products.next(sortedProducts);
  }

  public filter(form: FilterForm): void {
    let filteredByCategories = [];
    let filteredByBrands = [];
    let filteredByRating = [];
    let filteredByPrice = [];

    if (form.categories.length) {
      filteredByCategories = this.originProducts.filter(product => product.category.toLowerCase() === form.categories);
    } else {
      filteredByCategories = this.originProducts;
    }

    if (form.brands.length) {
      filteredByBrands = filteredByCategories.filter(product => form.brands.includes(product.farm.toLowerCase()));
    } else {
      filteredByBrands = filteredByCategories;
    }

    if (form.rating.length) {
      filteredByRating = filteredByBrands.filter(product => form.rating.includes(product.rating.toString()));
    } else {
      filteredByRating = filteredByBrands;
    }

    filteredByPrice = filteredByRating.filter(product => product.price >= form.price.minPrice && product.price <= form.price.maxPrice);

    this.products.next(filteredByPrice);
  }

  public reset(): void {
    this.products.next(this.originProducts);
  }
}
