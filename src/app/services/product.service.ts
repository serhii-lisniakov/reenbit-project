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
  public product: Product;
  constructor(private db: AngularFireDatabase) { }

  getProducts(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.db.database.ref(`products`).once('value').then(snapshot => {
        this.originProducts = snapshot.val();
        this.products.next(snapshot.val());
        resolve();
      });
    });
  }

  getProductById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.database.ref(`products/${id}`).once('value').then(snapshot => {
        this.product = snapshot.val();
        resolve();
      });
      this.db.database.ref(`products`).once('value').then(snapshot => {
        this.originProducts = snapshot.val();
        resolve();
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
}
