import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AllProductsBreadCrumbs,
  CartBreadCrumbs,
  HomeBreadCrumbs,
  ProductBreadCrumbs,
  WishlistBreadCrumbs
} from './header/bread-crumbs/bread-crumbs-list';
import { CartGuard } from './guards/cart.guard';

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
    data: { crumbs: CartBreadCrumbs },
    canActivate: [ CartGuard ],
    canDeactivate: [ CartGuard ]
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./body/wishlist/wishlist.module').then(m => m.WishlistModule),
    data: { crumbs: WishlistBreadCrumbs }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
