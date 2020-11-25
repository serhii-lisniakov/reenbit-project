import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AllProductsComponent} from './body/all-products/all-products.component';
import {ProductComponent} from './body/product/product.component';
import {BasketComponent} from './body/basket/basket.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AllProductsComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'basket', component: BasketComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
