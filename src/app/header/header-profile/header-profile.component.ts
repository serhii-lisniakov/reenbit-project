import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
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
  constructor(private cartService: CartService,
              private element: ElementRef) { }

  ngOnInit(): void {
    this.cartService.getCount();
    this.cartService.count.pipe(
      takeUntil(this.destroy$)
    ).subscribe(val => {
      this.element.nativeElement.firstChild.classList.add('active');
      this.count = val;
      setTimeout(() => this.element.nativeElement.firstChild.classList.remove('active'), 300);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
