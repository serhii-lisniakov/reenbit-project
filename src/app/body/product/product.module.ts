import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';


@NgModule({
  declarations: [
    ProductComponent,
    TabsComponent,
    TabComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
