import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
// @ts-ignore
import starBlack from 'src/assets/star-black.svg';
// @ts-ignore
import star from 'src/assets/star.svg';
import {Observable} from 'rxjs';
import {Product} from '../../../models/product.model';
import {ProductService} from '../../../services/product.service';
import {log} from 'util';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  private id: number;
  public product: Product;
  public starBlack: string;
  public star: string;
  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private productService: ProductService
  ) {
    this.id = route.snapshot.params.id;
    this.starBlack = starBlack;
    this.star = star;
  }

  ngOnInit(): void {
    this.getProductById();
  }
  getProductById(): void {
    const id = this.route.snapshot.params.id;
    this.productService.getProductById(id)
      .subscribe(promise => promise.then(product => this.product = product));
  }
}
