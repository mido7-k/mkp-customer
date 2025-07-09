import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from '../../core/services/breadcrumb.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SuccessPopupComponent } from '../../shared/success-popup/success-popup.component';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss',
    providers: [DialogService]
})
export class CheckOutComponent implements OnInit {
  currentLanguage: string = 'ar';
  restPrice: number = 30000;
  fundPrice: number = 275000;
  totalPrice: number = 305000;
  walletBalance: number = 100;
  selectedDeliveryMethod: string = '';
  selectedPaymentMethod: string = '';
  sdadPayed: boolean = false;

  useWallet: boolean = false;
  validCard: boolean = false;
    ref: DynamicDialogRef | undefined;
  
  constructor(
    private breadcrumbService: BreadcrumbService,
    private translateService: TranslateService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb([
      {
        routeNameEn: 'Contracts list',
        routeNameAr: 'قائمة العقود',
        routerLink: '/contracts',
      },
      {
        routeNameEn: 'Contracts cart',
        routeNameAr: 'سلة العقود',
        routerLink: '/cart',
      },
      {
        routeNameEn: 'Complete payment',
        routeNameAr: 'إتمام الدفع',
        routerLink: '',
      },
    ]);

    this.translateService.onLangChange.subscribe((lang) => {
      this.currentLanguage = lang.lang;
    });
    this.restPrice = this.totalPrice - this.fundPrice - (this.useWallet? this.walletBalance: 0)  ;
  }

  onDeliveryMethodChange(deliveryMethod: string) {
    this.selectedDeliveryMethod = deliveryMethod;
  }

  onPaymentMethodChange(paymentMethod: string) {
    this.selectedPaymentMethod = paymentMethod;
  }


  onWalletChange(checked: boolean) {
    this.useWallet = checked;
      this.restPrice = this.totalPrice - this.fundPrice - (this.useWallet? this.walletBalance: 0)  ;
  }

  
  onsdadPaidChange(checked: boolean) {
   this.sdadPayed = checked;
  }

  onValidCard(isValid: boolean) {
    this.validCard = isValid
  }

    showSuccessPaymentDialog() {
      this.ref = this.dialogService.open(SuccessPopupComponent, {
        width: '30%',
        contentStyle: { 'max-height': '500px', overflow: 'auto' },
        breakpoints: {
          '1200px': '40vw',
          '960px': '75vw',
          '640px': '90vw'
        },
        data: {
          paymentMethod: this.selectedPaymentMethod,
          deliveryMethod: this.selectedDeliveryMethod,
          imagePath: './assets/images/popup-check.svg',
          background: 'bg-success'
        }
      });
      
    }
}
