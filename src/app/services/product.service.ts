import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private db: AngularFireDatabase) { }

  getProducts(): Promise<any> {
    return this.db.database.ref(`products`).once('value').then(snapshot => snapshot.val());
  }

  getProductById(id: number): Promise<any> {
    return this.db.database.ref(`products/${id}`).once('value').then(snapshot => snapshot.val());
  }
}
