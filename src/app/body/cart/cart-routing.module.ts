import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartResolver } from './cart.resolver';

const routes: Routes = [
  { path: '', component: CartComponent, resolve: { data: CartResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    CartResolver
  ]
})
export class CartRoutingModule { }
