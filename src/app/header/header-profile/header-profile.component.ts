import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public count: number;
  public isCartFill = false;
  public form: FormGroup;
  public isActive = false;
  public ifRegister = false;
  public user: User;
  public showUserWindow = false;

  constructor(
    private cartService: CartService,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.authOnReload();
    this.cartService.getCount();
    this.subscribeToOrdersCounter();
    this.initForm();
    this.subscribeToUser();
    this.subscribeToProductButtonClick();
  }

  private subscribeToOrdersCounter(): void {
    this.cartService.count.pipe(
      takeUntil(this.destroy$)
    ).subscribe(count => {
      this.isCartFill = true;
      this.count = count;
      setTimeout(() => this.isCartFill = false, 300);
    });
  }

  private subscribeToUser(): void {
    this.authService.user.pipe(
      takeUntil(this.destroy$)
    ).subscribe(user => {
      this.user = user;
      this.cartService.getCount();
    });
  }

  private subscribeToProductButtonClick(): void {
    this.authService.onProductButtonClick.pipe(
      takeUntil(this.destroy$)
    ).subscribe((ifToggle) => {
        if (ifToggle) {
          this.toggleModal();
        }
    });
  }

  private initForm(): void {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  public toggleUserWindow(): void {
    this.showUserWindow = !this.showUserWindow;
  }

  public toggleModal(): void {
    this.isActive = !this.isActive;
    this.showUserWindow = false;
  }

  public auth(): void {
    if (this.form.valid) {
      const user = {
        id: new Date().getTime().toString(),
        ...this.form.value
      };
      if (this.ifRegister) {
        this.authService.register(user).then();
      } else {
        this.authService.auth(this.form.value).then();
      }
    }
  }

  public checkAuth(): void {
    if (!JSON.parse(localStorage.getItem('freshnesecomUser'))) {
      this.toggleModal();
    }
  }

  public changeTab(): void {
    this.ifRegister = !this.ifRegister;
  }

  public logOut(): void {
    this.authService.logOut();
    this.cartService.count.next(0);
    this.showUserWindow = false;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
