import {Component, Input, OnInit} from '@angular/core';
// @ts-ignore
import mockImg from 'src/assets/mockImg.svg';
// @ts-ignore
import starBlack from 'src/assets/star-black.svg';
// @ts-ignore
import star from 'src/assets/star.svg';
// @ts-ignore
import heart from 'src/assets/heart.svg';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product;
  public mockImg: string;
  public starBlack: string;
  public star: string;
  public heart: string;
  constructor() { }

  ngOnInit(): void {
    this.mockImg = mockImg;
    this.starBlack = starBlack;
    this.star = star;
    this.heart = heart;
  }

}
