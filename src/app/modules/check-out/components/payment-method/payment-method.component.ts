import { Component, EventEmitter, Output } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BillPopupComponent } from '../bill-popup/bill-popup.component';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.scss',
  providers: [DialogService]
})
export class PaymentMethodComponent {
  sdad: boolean = false;
  sdadSuspend: boolean = false;
  sdadPaid: boolean = false;
  bank: boolean = false;
  paymentMethod: string = '';
  fullName: string = '';
  cardNumber: string = '';
  expiryDate: string = '';
  cvv: string = '';
  ref: DynamicDialogRef | undefined;

  @Output() validCard = new EventEmitter<boolean>();


  constructor(public dialogService: DialogService){}

  showBankInfo(){
    console.log(this.paymentMethod);
    
  }

  openCalendar(event: any) {
    event.preventDefault();
  }

  checkFormValidity() {
    const isValid = !!(this.fullName && this.cardNumber && this.expiryDate && this.cvv);
    console.log(isValid);
    this.validCard.emit(isValid);
  }

  onInputChange() {
    this.checkFormValidity();
  }

  @Output() sdadPaidChange = new EventEmitter<boolean>();
  @Output() paymentMethodChange = new EventEmitter<string>();

  onPaymentMethodChange() {
    this.paymentMethodChange.emit(this.paymentMethod);
  }

  onsdadPaidChange() {
    this.sdadPaidChange.emit(this.sdadPaid);
  }
  
    
  showInvoiceDialog() {
    this.ref = this.dialogService.open(BillPopupComponent, {
      width: '25%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      breakpoints: {
        '1200px': '40vw',
        '960px': '75vw',
        '640px': '90vw'
      },
      data: {
        invoiceNumber: 'SAD-2024-11-14-1234',
        imagePath: './assets/images/popup-paper.svg',
        background: 'bg-success'
      }
    });
  
    this.ref.onClose.subscribe(() => {
      this.sdadSuspend = true;
      setTimeout(() => {
        this.sdadPaid = true;
        this.sdadPaidChange.emit(this.sdadPaid);
      }, 1000);
    }
  );
    
  }
  
}
