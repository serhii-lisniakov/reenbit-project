import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllProductsBreadCrumbs, CartBreadCrumbs, HomeBreadCrumbs, ProductBreadCrumbs } from './header/bread-crumbs/bread-crumbs-list';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./body/home/home.module').then(m => m.HomeModule),
    data: { crumbs: HomeBreadCrumbs }
  },
  {
    path: 'products',
    loadChildren: () => import('./body/all-products/all-products.module').then(m => m.AllProductsModule),
    data: { crumbs: AllProductsBreadCrumbs }
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./body/product/product.module').then(m => m.ProductModule),
    data: { crumbs: ProductBreadCrumbs }
  },
  {
    path: 'cart',
    loadChildren: () => import('./body/cart/cart.module').then(m => m.CartModule),
    data: { crumbs: CartBreadCrumbs }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
