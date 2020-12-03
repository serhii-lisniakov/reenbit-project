import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';


@Injectable()
export class ProductResolver implements Resolve<Promise<Product | Product[]>> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot): Promise<Product | Product[]> {
    return Promise.all([this.productService.getProductById(+route.params.id), this.productService.getProducts()]);
  }
}
