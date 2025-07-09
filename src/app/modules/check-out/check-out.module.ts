import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckOutRoutingModule } from './check-out-routing.module';
import { CheckOutComponent } from './check-out.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { ViewAddressComponent } from './components/view-address/view-address.component';
import { DeliveryMethodComponent } from './components/delivery-method/delivery-method.component';
import { BillPopupComponent } from './components/bill-popup/bill-popup.component';
import { TranslateModule } from '@ngx-translate/core';
import {  RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { OverlayModule } from 'primeng/overlay';

@NgModule({
  declarations: [CheckOutComponent, WalletComponent, ViewAddressComponent, PaymentMethodComponent, DeliveryMethodComponent, BillPopupComponent],
  imports: [
    CommonModule,
    CheckOutRoutingModule,
    TranslateModule,
    RadioButtonModule,
    FormsModule,
    ToggleButtonModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    CalendarModule,
    DialogModule,
    ButtonModule, 
    DynamicDialogModule,
    OverlayModule
  ]
})
export class CheckOutModule { }
