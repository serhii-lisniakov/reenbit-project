import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';


@Injectable()
export class ProductsResolver implements Resolve<Promise<Product[]>> {
  constructor(private productService: ProductService) {}

  resolve(): Promise<Product[]> {
    return this.productService.getProducts();
  }
}
