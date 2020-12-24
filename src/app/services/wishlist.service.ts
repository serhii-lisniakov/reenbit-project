import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  public wishList = new BehaviorSubject<Product[]>([]);

  constructor(
    private db: AngularFireDatabase,
    private cartService: CartService,
    private authService: AuthService) { }

  public getWishlist(): Promise<any[]> {
    return new Promise((resolve) => {
      this.db.database.ref(`users/${this.authService.user.value.id}/wishlist`).once('value').then(snapshot => {
        if (!snapshot.val()) {
          this.wishList.next([]);
        } else {
          this.wishList.next(snapshot.val() || []);
        }
        resolve(snapshot.val());
      });
    });
  }

  public toggleProductToWishlist(product: Product): void {
    let wishlist = this.wishList.getValue();
    if (wishlist.some(item => item.id === product.id)) {
      wishlist = wishlist.filter(item => item.id !== product.id);
    } else {
      wishlist.push(product);
    }
    this.wishList.next(wishlist);
    this.postWishlist(wishlist);
  }

  private postWishlist(wishlist: Product[]): void {
    this.db.database.ref(`users/${this.authService.user.value.id}`).update({
      wishlist
    }).then();
  }
}
