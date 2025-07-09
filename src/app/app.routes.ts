import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'account-info',
    loadChildren: () =>
      import('./modules/account-info/account-info.module').then(
        (m) => m.AccountInfoModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home-products/home-products.module').then(
        (m) => m.HomeProductsModule
      ),
  },
  {
    path: 'shopping',
    loadChildren: () =>
      import('./modules/shopping/shopping.module').then(
        (m) => m.ShoppingModule
      ),
  },
  {
    path: 'contracts',
    loadChildren: () =>
      import('./modules/contract/contract.module').then(
        (m) => m.ContractModule
      ),
  },
  {
    path: 'product/:id',
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./modules/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'check-out',
    loadChildren: () =>
      import('./modules/check-out/check-out.module').then(
        (m) => m.CheckOutModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./modules/orders/orders.module').then((m) => m.OrdersModule),
  },
  {
    path: 'address',
    loadChildren: () =>
      import('./modules/address/address.module').then((m) => m.AddressModule),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./modules/help-request/help-request.module').then(
        (m) => m.HelpRequestModule
      ),
  },
];
