import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  public products: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.products = db.list('products').valueChanges();
  }

  ngOnInit(): void {
  }

}
