import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./body/home/home.module').then(m => m.HomeModule),
    data: { path: 'Homepage' }
  },
  {
    path: 'products',
    loadChildren: () => import('./body/all-products/all-products.module').then(m => m.AllProductsModule),
    data: { path: 'Homepage / All products' }
  },
  {
    path: 'products/:id',
    loadChildren: () => import('./body/product/product.module').then(m => m.ProductModule),
    data: { path: 'Homepage / All products / ' }
  },
  {
    path: 'cart',
    loadChildren: () => import('./body/cart/cart.module').then(m => m.CartModule),
    data: {
      hideFooter: true,
      path: 'Cart'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
