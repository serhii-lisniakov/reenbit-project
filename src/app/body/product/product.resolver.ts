import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';


@Injectable()
export class ProductResolver implements Resolve<Observable<Product>> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.productService.getProductById(route.params.id)
      ]).catch(err => {
        // TODO Add redirect to maintenance page
        console.log(err);
      }).then(
        resolve,
        reject
      );
    });
  }
}
