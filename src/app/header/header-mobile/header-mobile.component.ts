import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {
  public isActive = false;

  constructor() { }
  ngOnInit(): void { }

  public toggleMenu(): void {
    this.isActive = !this.isActive;
  }
}
