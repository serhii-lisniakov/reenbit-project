export const HomeBreadCrumbs = [
  { path: '/home', label: 'Homepage' }
];

export const AllProductsBreadCrumbs = [
  ...HomeBreadCrumbs,
  { path: '/products', label: 'All products' }
];

export const ProductBreadCrumbs = [
  ...AllProductsBreadCrumbs,
  { path: '/products/:id', label: 'ProductComponent', title: 'product title' }
];

export const CartBreadCrumbs = [
  ...HomeBreadCrumbs,
  { path: '/cart', label: 'Checkout' }
];

export const WishlistBreadCrumbs = [
  ...HomeBreadCrumbs,
  { path: '/wishlist', label: 'Wishlist' }
]
