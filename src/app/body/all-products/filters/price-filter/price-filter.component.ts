import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../../../../services/product.service';

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  styleUrls: ['./price-filter.component.scss']
})
export class PriceFilterComponent implements OnInit {
  public minValue: number;
  public maxValue: number;
  public options: Options;

  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit(): void {
    const products = this.route.snapshot.data.data;
    this.minValue = Math.floor(this.getMinPrice(products));
    this.maxValue = Math.ceil(this.getMaxPrice(products));
    this.options = {
      floor: this.minValue,
      ceil: this.maxValue,
      step: 1
    };
  }

  private getMinPrice(products): number {
    return products.reduce((acc, product) => acc < product.price ? acc : product.price);
  }

  private getMaxPrice(products): number {
    return products.reduce((acc, product) => acc > product.price ? acc : product.price);
  }

  filter(): void {
    this.productService.filterByPrice([this.minValue, this.maxValue]);
  }
}
