import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router } from '@angular/router';
import { CartComponent } from '../body/cart/cart.component';
import { PermissionsService } from '../services/permissions.service';

@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate, CanDeactivate<CartComponent> {
  constructor(private router: Router, private permissions: PermissionsService) {}

  canActivate(): boolean {
    if (!JSON.parse(localStorage.getItem('freshnesecomUser'))) {
      if (this.router.url === '/') {
        this.router.navigateByUrl('home').then();
      }
      return false;
    } else { return true; }
  }

  canDeactivate(): boolean {
    if (this.permissions.isCartFormDirty) {
      return confirm('Discard all the changes?');
    }
    return true;
  }
}
