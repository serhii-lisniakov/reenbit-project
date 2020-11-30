import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';


@Injectable()
export class ProductResolver implements Resolve<Observable<Product>> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return of(this.productService.getProductById(route.params.id));
  }
}
