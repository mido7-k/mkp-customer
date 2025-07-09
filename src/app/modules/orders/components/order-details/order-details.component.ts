import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { BreadcrumbService } from '../../../../core/services/breadcrumb.service';
import { DynamicPopupComponent } from '../../../../shared/dynamic-popup/dynamic-popup.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss',
  providers: [DialogService]
})
export class OrderDetailsComponent implements OnInit{
    currentLanguage: string = 'ar'
    ref: DynamicDialogRef | undefined;
  status:string =  "orders.In Progress";
address: string = 'حي العقيق، شارع الأطلال- المبنى 7454 - رقم الوحدة 12  - الرمز البريدي 19827  - الرياض, المملكة العربية السعودية  - 0572651405 (966)';
restPrice:number = 30000;
fundPrice: number = 275000;
totalPrice: number = 305000;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private translateService: TranslateService,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb([
      { routeNameEn: 'Orders list', routeNameAr: 'قائمة الطلبات', routerLink: '/orders' },
      {
        routeNameEn: 'Order details',
        routeNameAr: 'تفاصيل الطلب',
      },
    ]);

    this.translateService.onLangChange.subscribe((lang) => {
      this.currentLanguage = lang.lang;
    });
  }

  confirmCancel() { 

    if (this.status === 'orders.In delivery'){
       this.status = 'orders.Completed';
      return;
    }
      this.ref = this.dialogService.open(DynamicPopupComponent, {
        width: '25%',
        contentStyle: { 'max-height': '500px', overflow: 'auto' },
        breakpoints: {
          '1200px': '40vw',
          '960px': '75vw',
          '640px': '90vw',
        },
        data: {
          title: 'orders.confirmCancel',
          subTitle: 'orders.subConfirm',
          btnTitle: 'orders.confirm',
          imagePath: './assets/images/popup-exclamation.svg',
          background: 'bg-error',
        },
      });
  
          this.ref.onClose.subscribe((proceed: boolean) => {
            if (proceed) {
              console.log(proceed);
            this.status = 'orders.Completed';
            }else{
                this.status = 'orders.In delivery';
            }
          });
          
        }

}
