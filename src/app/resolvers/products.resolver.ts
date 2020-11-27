import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';


@Injectable()
export class ProductsResolver implements Resolve<Observable<Product[]>> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    console.log(this.productService.getProducts());
    return of();
  }
}
