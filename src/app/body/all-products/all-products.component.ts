import { Component, OnInit } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: string;
}

const mockProducts = [
  {id: 1, title: 'ketchup', price: '$36'},
  {id: 2, title: 'caviar', price: '$100'},
];

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: Product[] = mockProducts;

  constructor() { }

  ngOnInit(): void {
  }

}
