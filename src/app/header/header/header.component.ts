import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isSmallScreen: boolean;
  public showSearch = true;
  public isActive = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe('(max-width: 1023px)').subscribe((state: BreakpointState) => {
      this.isSmallScreen = state.matches;
      this.showSearch = !state.matches;
    });
  }

  public toggleMenu(): void {
    this.isActive = !this.isActive;
    this.showSearch = false;
  }

  public toggleSearch(): void {
    this.showSearch = !this.showSearch;
    this.isActive = false;
  }
}
