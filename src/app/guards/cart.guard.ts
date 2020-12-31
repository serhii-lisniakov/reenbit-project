import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!JSON.parse(localStorage.getItem('freshnesecomUser'))) {
      if (this.router.url === '/') {
        this.router.navigateByUrl('home').then();
      }
      return false;
    } else { return true; }
  }
}
