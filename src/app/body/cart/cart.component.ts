import { Component, OnInit } from '@angular/core';
import { CartInput } from '../../models/cart-input.model';
import { CartInputs } from './cart-inputs.list';

@Component({
  selector: 'app-basket',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartInputs: CartInput[] = CartInputs;

  constructor() { }

  ngOnInit(): void {
  }
}
