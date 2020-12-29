import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {
  @Input() isActive: boolean;

  constructor() { }
  ngOnInit(): void { }

}
