import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { ProposalCardComponent } from './proposal-card/proposal-card.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent,
    TabsComponent,
    TabComponent,
    ProposalCardComponent
  ],
    imports: [
        CommonModule,
        ProductRoutingModule,
        SharedModule
    ]
})
export class ProductModule { }
