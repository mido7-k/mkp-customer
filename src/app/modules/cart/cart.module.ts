import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReadOnlyComponent } from "../../shared/read-only/read-only.component";


@NgModule({
  declarations: [CartComponent, OrdersListComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    TranslateModule,
    ReadOnlyComponent
]
})
export class CartModule { }
