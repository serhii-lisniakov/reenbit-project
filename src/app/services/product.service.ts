import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public originProducts: Product[];
  public products = new BehaviorSubject([]);
  constructor(private db: AngularFireDatabase) { }

  getProducts(): Promise<any[]> {
    return new Promise((resolve) => {
      this.db.database.ref(`products`).once('value').then(snapshot => {
        this.originProducts = snapshot.val();
        this.products.next(snapshot.val());
        resolve(snapshot.val());
      });
    });
  }

  getProductById(id: number): Promise<any> {
    return new Promise((resolve) => {
      this.db.database.ref(`products/${id}`).once('value').then(snapshot => {
        resolve(snapshot.val());
      });
    });
  }

  filterByCategory(category: string): void {
    this.products.next(this.originProducts);
    const val = this.products.getValue().filter(product => product.category.toLowerCase() === category);
    this.products.next(val);
  }

  filterByBrand(brands: string[]): void {
    if (brands.length) {
      this.products.next(this.originProducts);
      const val = this.products.getValue().filter(product => brands.includes(product.farm.replace(/\s/g, '').toLowerCase()));
      this.products.next(val);
    } else {
      this.products.next(this.originProducts);
    }
  }

  filterByRating(ratings: string[]): void {
    if (ratings.length) {
      this.products.next(this.originProducts);
      const val = this.products.getValue().filter(product => ratings.includes(product.rating.toString()));
      this.products.next(val);
    } else {
      this.products.next(this.originProducts);
    }
  }
}
