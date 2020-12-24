import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistPageComponent } from './wishlist-page/wishlist-page.component';
import { WishlistResolver } from './wishlist.resolver';

const routes: Routes = [
  { path: '', component: WishlistPageComponent, resolve: { data: WishlistResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    WishlistResolver
  ]
})
export class WishlistRoutingModule { }
