import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { BehaviorSubject } from 'rxjs';
import { FilterForm } from '../models/filter-form.model';
import { Product } from '../models/product.model';
import { DropDownOption } from '../models/drop-down-select.model';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private originProducts: Product[];
  public products = new BehaviorSubject([]);
  constructor(private db: AngularFireDatabase,
              private cartService: CartService) { }

  public getProducts(): Promise<any[]> {
    return new Promise((resolve) => {
      this.db.database.ref(`products`).once('value').then(snapshot => {
        this.cartService.getOrderList().then();
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

  public sorting(condition: DropDownOption): void {
    const sortedProducts = this.products.getValue().sort((a, b) => {
      switch (condition.operator) {
        case 'lowToHigh':
          switch (condition.value) {
            case 'price': return a.price - b.price;
            case 'rating': return a.rating - b.rating;
          }
          break;
        case 'highToLow':
          switch (condition.value) {
            case 'price': return b.price - a.price;
            case 'rating': return b.rating - a.rating;
          }
          break;
      }
    });
    this.products.next(sortedProducts);
  }

  public filter(form: FilterForm): void {
    const brands = form.brands.filter(item => typeof item !== 'boolean');
    const rating = form.rating.filter(item => typeof item !== 'boolean');
    let filteredByCategories = [];
    let filteredByBrands = [];
    let filteredByRating = [];
    let filteredByPrice = [];

    if (form.categories.length) {
      filteredByCategories = this.originProducts.filter(product => product.category.toLowerCase() === form.categories);
    } else {
      filteredByCategories = this.originProducts;
    }

    if (brands.length) {
      filteredByBrands = filteredByCategories.filter(product => brands.includes(product.farm.toLowerCase()));
    } else {
      filteredByBrands = filteredByCategories;
    }

    if (rating.length) {
      filteredByRating = filteredByBrands.filter(product => rating.includes(product.rating.toString()));
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
