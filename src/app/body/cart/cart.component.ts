import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartInput } from '../../models/cart-input.model';
import { CartInputs } from './constant-lists/cart-inputs.list';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from '../../models/country.model';
import { countries } from './constant-lists/countries.list';
import { Product } from '../../models/product.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, map, startWith, takeUntil } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';
import { City } from '../../models/city.model';
import { cities } from './constant-lists/cities.list';
import { ConfirmModalService } from '../../services/confirm-modal.service';
import { SuccessModalService } from '../../services/success-modal.service';
import { ConfirmModalData } from '../../models/confirm-modal-data.model';
import { PermissionsService } from '../../services/permissions.service';

@Component({
  selector: 'app-basket',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  private phoneRegex = new RegExp('[+]*[0-9]{5,15}$');
  private postalRegex = new RegExp('^[0-9]+$');
  public cartInputs: CartInput[] = CartInputs;
  public form: FormGroup;
  public countries: Country[] = countries;
  public cities: City[] = cities;
  public filteredCities: Observable<City[]>;
  public orderList = new BehaviorSubject<Product[]>([]);
  public subtotalPrice: number;
  public tax: number;
  public isDisabled = true;
  public defaultValues = {
    country: '',
    address: ''
  };

  constructor(
    private cartService: CartService,
    private modalSuccess: SuccessModalService,
    private modalConfirm: ConfirmModalService,
    private permissions: PermissionsService) { }

  ngOnInit(): void {
    this.initForm();
    this.subscribeToCartServiceOrderList();
    this.subscribeToLocalOrderList();
    this.subscribeToForm();
    this.setFilteredCities();
    this.subscribeToCountryChange();
    this.subscribeToAddressChange();
  }

  private subscribeToCartServiceOrderList(): void {
    this.cartService.orderList.pipe(takeUntil(this.destroy$)).subscribe((newOrderList: Product[]) => {
      this.orderList.next(newOrderList);
      this.getPrices();
    });
  }

  private subscribeToLocalOrderList(): void {
    this.orderList.pipe(takeUntil(this.destroy$)).subscribe(() => this.getPrices());
  }

  private subscribeToForm(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.permissions.isCartFormDirty = true;
      this.isDisabled = !(this.form.valid && this.orderList.value.length > 0);
    });
  }

  private setFilteredCities(): void {
    this.filteredCities = this.form.controls.townOrCity.valueChanges
      .pipe(
        startWith(''),
        map(cityName => this.filterCities(cityName))
      );
  }

  private filterCities(cityName: string): City[] {
    return this.cities.filter(city => city.name.toLowerCase().includes(cityName.toLowerCase()));
  }

  private initForm(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.phoneRegex)]),
      address: new FormControl('Boikivska St. 1', [Validators.required]),
      townOrCity: new FormControl('', [Validators.required]),
      country: new FormControl('Ukraine', [Validators.required]),
      postal: new FormControl('', [Validators.required, Validators.pattern(this.postalRegex), Validators.minLength(5)]),
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
    if (this.form.valid && this.orderList.value?.length) {
      this.form.value.orderList = this.orderList.value;
      this.modalSuccess.visible.next(true);
      this.cartService.orderList.next([]);
      this.cartService.postOrderList([]);
    } else {
      alert('form invalid or cart is empty');
    }
  }

  private subscribeToCountryChange(): void {
    this.defaultValues.country = this.form.controls.country.value;
    this.form.controls.country.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.modalConfirm.showDialog('country'));
  }

  private subscribeToAddressChange(): void {
    this.defaultValues.address = this.form.controls.address.value;
    this.form.controls.address.valueChanges
      .pipe(takeUntil(this.destroy$), debounceTime(500))
      .subscribe(() => this.modalConfirm.showDialog('address'));
  }

  public confirmChanges(response: ConfirmModalData): void {
    if (response.userResponse) {
      this.defaultValues[response.prop] = this.form.get(response.prop).value;
    } else {
      this.form.get(response.prop).setValue(this.defaultValues[response.prop], { emitEvent: false });
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
