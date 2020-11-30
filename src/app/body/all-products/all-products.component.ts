import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  public products: Product[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.snapshot.data.data.then(data => this.products = data);
  }
}


