import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AddressComponent, AddressCardComponent],
  imports: [
    CommonModule,
    AddressRoutingModule,
    TranslateModule
  ]
})
export class AddressModule { }
