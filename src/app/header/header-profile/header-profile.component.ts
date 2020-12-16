import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject();
  public count: number;
  public isCartFill = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCount();
    this.subscribeToOrdersCounter();
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
