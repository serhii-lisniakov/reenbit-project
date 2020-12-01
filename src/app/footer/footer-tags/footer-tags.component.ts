import { Component, OnInit } from '@angular/core';

const mockTags = ['Beans', 'Carrots', 'Apples', 'Garlic', 'Mushrooms', 'Tomatoes', 'Chilli peppers'];

@Component({
  selector: 'app-footer-tags',
  templateUrl: './footer-tags.component.html',
  styleUrls: ['./footer-tags.component.scss']
})
export class FooterTagsComponent implements OnInit {
  tags: string[] = mockTags;

  constructor() { }

  ngOnInit(): void {
  }

}
