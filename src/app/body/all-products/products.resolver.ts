import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';


@Injectable()
export class ProductsResolver implements Resolve<Observable<Product[]>> {

  constructor(private productService: ProductService) {}

  resolve(): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.productService.getProducts()
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
