import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate {
  canActivate(): boolean {
    return !!JSON.parse(localStorage.getItem('freshnesecomUser'));
  }
}
