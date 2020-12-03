import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[];
  constructor(private db: AngularFireDatabase) { }

  getProducts(): Promise<any[]> {
    return new Promise((resolve) => {
      this.db.database.ref(`products`).once('value').then(snapshot => {
        this.products = snapshot.val();
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
}
