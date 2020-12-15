import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public orderList = new BehaviorSubject<Product[]>([]);
  public count = new BehaviorSubject(0);
  constructor(private db: AngularFireDatabase) { }

  public getOrderList(): Promise<any[]> {
    return new Promise((resolve) => {
      this.db.database.ref(`userSerhii`).once('value').then(snapshot => {
        if (!snapshot.val()) {
          this.orderList.next([]);
        } else {
          this.orderList.next(snapshot.val().orderList || []);
        }
        resolve(snapshot.val());
      });
    });
  }

  public getCount(): void {
    this.db.database.ref(`userSerhii/count`).once('value').then(snapshot => {
      this.count.next(snapshot.val());
    });
  }

  private calculateCount(): number {
    return this.orderList.getValue().reduce((acc, order) => acc + order.count, 0);
  }

  public postOrderList(orderList?: Product[]): void {
    this.db.database.ref('userSerhii/').set({
      wishList: [],
      count: this.calculateCount(),
      orderList: orderList || this.orderList.getValue()
    }).then();
    if (orderList) {
      this.getCount();
    }
  }

  public addProductToCart(product: Product): void {
    const orderList = this.orderList.getValue();
    if (orderList.some(item => item.id === product.id)) {
      orderList.forEach(item => item.id === product.id ? item.count += product.count : item);
    } else {
      orderList.push(product);
    }
    this.orderList.next(orderList);
    this.count.next(this.calculateCount());
    this.postOrderList();
  }

  public deleteProductFromCart(product: Product): void {
    this.orderList.next(this.orderList.getValue().filter(order => order.id !== product.id));
    this.count.next(this.calculateCount());
    this.postOrderList();
  }
}
