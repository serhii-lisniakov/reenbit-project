import { Component, OnInit } from '@angular/core';
import { CartInput } from '../../models/cart-input.model';
import { CartInputs } from './constant-lists/cart-inputs.list';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from '../../models/country.model';
import { countries } from './constant-lists/countries.list';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-basket',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartInputs: CartInput[] = CartInputs;
  public form: FormGroup;
  public countries: Country[] = countries;
  public orderList: Product[];
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      townOrCity: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      postal: new FormControl('', [Validators.required, Validators.pattern('[A-Z0-9]*$')]),
      notes: new FormControl(''),
      advertisement: new FormControl(false, [Validators.requiredTrue]),
      policy: new FormControl(false, [Validators.requiredTrue])
    });
  }

  public logForm(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

  public addClassActive(e: Event): void {
    (e.target as HTMLInputElement).classList.add('active');
  }
}
