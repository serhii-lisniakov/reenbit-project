import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsComponent } from './all-products.component';
import { ProductsResolver } from './products.resolver';

const routes: Routes = [
  { path: '', component: AllProductsComponent, resolve: { data: ProductsResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ProductsResolver
  ]
})
export class AllProductsRoutingModule { }
