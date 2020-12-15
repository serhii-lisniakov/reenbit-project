import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartInput } from '../../models/cart-input.model';
import { CartInputs } from './constant-lists/cart-inputs.list';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from '../../models/country.model';
import { countries } from './constant-lists/countries.list';
import { Product } from '../../models/product.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import { City } from '../../models/city.model';
import { cities } from './constant-lists/cities.list';

@Component({
  selector: 'app-basket',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public cartInputs: CartInput[] = CartInputs;
  public form: FormGroup;
  public countries: Country[] = countries;
  public cities: City[] = cities;
  public filteredCities: Observable<City[]>;
  public orderList = new BehaviorSubject<Product[]>([]);
  public subtotalPrice: number;
  public tax: number;
  public isDisabled = true;
  public isSuccess = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.initForm();
    this.cartService.orderList.pipe(takeUntil(this.destroy$)).subscribe(val => {
      this.orderList.next(val);
      this.getPrices();
    });
    this.orderList.pipe(takeUntil(this.destroy$)).subscribe(val => this.getPrices());
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(val => {
      this.isDisabled = !(this.form.valid && this.orderList.value.length > 0);
    });
    this.filteredCities = this.form.controls.townOrCity.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        startWith(''),
        map(value => this.filterCities(value))
      );
  }

  private filterCities(value: string): City[] {
    return this.cities.filter(city => city.name.toLowerCase().includes(value.toLowerCase()));
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

  private getPrices(): void {
    this.subtotalPrice = +(this.orderList.getValue().reduce((acc, product) => acc + product.price * product.count, 0)).toFixed(2);
    this.tax = +(this.subtotalPrice *  0.17).toFixed(2);
  }

  public sendForm(): void {
    if (this.form.valid && this.orderList.value.length !== 0) {
      this.form.value.orderList = this.orderList.value;
      console.log(this.form.value);
      this.isSuccess = true;
      this.initForm();
      this.cartService.orderList.next([]);
      this.cartService.postOrderList([]);
    } else {
      alert('form invalid or cart is empty');
    }
  }

  public closeModal(): void {
    this.isSuccess = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
