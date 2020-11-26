import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
// @ts-ignore
import starBlack from 'src/assets/star-black.svg';
// @ts-ignore
import star from 'src/assets/star.svg';
import {Observable} from 'rxjs';
import {Product} from '../../all-products/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product: Observable<Product>;
  public starBlack: string;
  public star: string;
  constructor(
    private route: ActivatedRoute,
    private db: AngularFireDatabase
  ) {
    const id = route.snapshot.params.id;
    db.database.ref(`products/${id}`).once('value').then(snapshot => {
      this.product = snapshot.val();
      this.starBlack = starBlack;
      this.star = star;
    });
  }

  ngOnInit(): void {
  }
}
