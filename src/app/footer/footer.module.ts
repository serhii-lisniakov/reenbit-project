import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { FooterTagsComponent } from './footer-tags/footer-tags.component';

@NgModule({
  declarations: [
    FooterComponent,
    FooterNavComponent,
    FooterTagsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FooterComponent,
  ]
})
export class FooterModule { }
