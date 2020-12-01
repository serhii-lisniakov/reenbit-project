import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-proposal-card',
  templateUrl: './proposal-card.component.html',
  styleUrls: ['./proposal-card.component.scss']
})
export class ProposalCardComponent implements OnInit {
  @Input() proposal: Product;
  constructor() { }

  ngOnInit(): void {
  }

}
