import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActionButton } from '../../core/models/action-btn';
import { BreadcrumbService } from '../../core/services/breadcrumb.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TableItem } from '../../core/models/orders';
import { DynamicPopupComponent } from '../../shared/dynamic-popup/dynamic-popup.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SuccessPopupComponent } from '../../shared/success-popup/success-popup.component';
import { OtpPopupComponent } from '../../shared/otp-popup/otp-popup.component';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.scss',
  providers: [DialogService]
})
export class OrdersListComponent implements OnInit{

  currentLanguage: string = 'ar';
  searchValue: string = '';
  ordersNumber: number = 24;
  ordersList: TableItem[] = [];
  ref: DynamicDialogRef | undefined;
  actionButtons: ActionButton[] = [
    {
      title: "viewDetails",
      icon: '',
      class: 'view-details',
      imgPath: "./assets/images/eye.svg",
      func: (id: string) => this.viewDetails(id),
    }
  ]
  private ordersUrl = './assets/orders-list.json';
  
  
  sortOptions = [
    { labelEn: 'Show all requests', labelAr: 'عرض جميع الطلبات', value: '0' },
    { labelEn: 'Accepted', labelAr: 'مقبول', value: '1' },
    { labelEn: 'Rejected', labelAr: 'مرفوض', value: '2' },
    { labelEn: 'Waiting supplier confirmation', labelAr: 'بانتظار تأكيد المورد', value: '3' },
    { labelEn: 'In delivery', labelAr: 'قيد التسليم', value: '4' },
    { labelEn: 'In shipping', labelAr: 'قيد الشحن', value: '5' },
    { labelEn: 'Completed', labelAr: 'مكتمل', value: '6' },
  ];
  
      selectedSort: string = 'عرض جميع الطلبات';
      totalResults: number = 10;
    
    constructor(
      private breadcrumbService: BreadcrumbService,
      private http: HttpClient,
      private router: Router,
      private translateService : TranslateService,
       public dialogService: DialogService
    ) {}
    ngOnInit() {
      this.breadcrumbService.setBreadcrumb([
        { routeNameEn: 'Orders list', routeNameAr: 'قائمة الطلبات', routerLink: '/orders' },
      ]);

      
  
      this.http.get<TableItem[]>(this.ordersUrl).subscribe(
        (data: TableItem[]) => {
        this.ordersList = data
        this.ordersNumber = this.ordersList.length
        
        },
        (error) => {
          console.error('Error fetching data:', error);
        }

       );
       
       this.translateService.onLangChange.subscribe((lang) => {
         this.currentLanguage = lang.lang;

         if (this.currentLanguage === 'ar') {
          this.selectedSort = this.sortOptions[0].labelAr;
        } else {
          this.selectedSort = this.sortOptions[0].labelEn;
        }
        });

        if(this.currentLanguage === "ar"){
          this.selectedSort = this.sortOptions[0].labelAr;
        }else{
          this.selectedSort = this.sortOptions[0].labelEn;
        }
    }
  
    viewDetails(id: string) {
      console.log(id);
      
      this.router.navigate(['/orders/details', id]);
    } 

    onSortChange(sortValue: string) {
     this.selectedSort =sortValue
  }

  deleteOrder(id: string) {
    console.log(`Deleting order ${id}`);
    this.ordersList = this.ordersList.filter(order => order!.orderNumber!.en !== id);
  }

  getActionButtons(item: TableItem): ActionButton[] {
    const buttons = [
      {
        title: "viewDetails",
        icon: 'pi-eye',
      imgPath: "./assets/images/eye.svg",
        class: 'view-details',
        func: (id: string) => this.viewDetails(id)
      }
    ];
  
    if (item!.status!.en === 'Waiting for Supplier Approval') {
      buttons.unshift({
        title: "delete",
        icon: 'pi-times',
        class: 'delete-btn',
        imgPath: "./assets/images/close.svg",
        func: (id: string) => this.confirmCancel(id)
      });
    }

    if (item!.status!.en === 'In Delivery') {
      buttons.unshift({
        title: "orders.confirmReceive",
        icon: 'pi-times',
        class: 'receipe-btn',
        imgPath: "./assets/images/fast-car.svg",
        func: () => this.openPopup()
      });
    }
  
    return buttons;
  }


      confirmCancel(id:string) {
        this.ref = this.dialogService.open(DynamicPopupComponent, {
          width: '25%',
          contentStyle: { 'max-height': '500px', overflow: 'auto' },
          breakpoints: {
            '1200px': '40vw',
            '960px': '75vw',
            '640px': '90vw'
          },
          data: {
            title: "orders.confirmCancel",
            subTitle: "orders.subConfirm",
            btnTitle: "orders.confirm",
            imagePath: './assets/images/popup-exclamation.svg',
            background: 'bg-error'
          }
        });

        this.ref.onClose.subscribe((proceed: boolean) => {
          if (proceed) {
            console.log(proceed);
            this.deleteOrder(id)
          }
        });
        
      }


      openPopup() {
        this.ref = this.dialogService.open(OtpPopupComponent, {
          width: '25%',
          contentStyle: { 'max-height': '500px', overflow: 'auto' },
          breakpoints: {
            '1200px': '40vw',
            '960px': '75vw',
            '640px': '90vw'
          },
          data: {
            title: "orders.confirmCancel",
            subTitle: "orders.subConfirm",
            btnTitle: "orders.confirm",
            imagePath: './assets/images/popup-question.svg',
            background: 'bg-neutral',
            orderOtp: "true",
            mobile: "567298418"
          }
        });

        this.ref.onClose.subscribe((proceed: boolean) => {
          if (proceed) {
            this.showSuccessPaymentDialog();
          }
        });
        
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
          paymentMethod: 'sdad',
          deliveryMethod: 'company',
          imagePath: './assets/images/popup-check.svg',
          background: 'bg-success'
        }
      });
      
    }
    
  
  
}