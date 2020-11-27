import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private db: AngularFireDatabase) { }

  getProducts(): Observable<any[]> {
    return this.db.list('products').valueChanges();
  }

  getProductById(id: number): Observable<Promise<any>> {
    return of(this.db.database.ref(`products/${id}`).once('value').then(snapshot => snapshot.val()));
  }
}
