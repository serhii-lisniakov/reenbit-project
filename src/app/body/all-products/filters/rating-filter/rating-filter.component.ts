import { Component, OnInit } from '@angular/core';
// @ts-ignore
import star from '../../../../../assets/star.svg';
// @ts-ignore
import starFull from '../../../../../assets/star-full.svg';

@Component({
  selector: 'app-rating-filter',
  templateUrl: './rating-filter.component.html',
  styleUrls: ['./rating-filter.component.scss']
})
export class RatingFilterComponent implements OnInit {
  public star;
  public starFull;

  constructor() { }

  ngOnInit(): void {
    this.star = star;
    this.starFull = starFull;
  }

}
