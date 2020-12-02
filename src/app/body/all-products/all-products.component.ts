import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  public products: Product[];
  public page: number;
  public productsToShow = 5;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.products;
  }

  showMoreProducts(): void {
    this.productsToShow += 5;
  }

}


