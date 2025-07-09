import { Component, OnInit } from '@angular/core';
import { TableItem } from '../../../../core/models/orders';
import { ActionButton } from '../../../../core/models/action-btn';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from '../../../../core/services/breadcrumb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.scss'
})
export class TicketListComponent implements OnInit{


  
    currentLanguage: string = 'ar';
    searchValue: string = '';
    ordersNumber: number = 24;
    ticketsList: TableItem[] = [];
    actionButtons: ActionButton[] = [
      {
        title: "viewDetails",
        icon: '',
        class: 'view-details',
        imgPath: "./assets/images/eye.svg",
        func: (id: string) => this.viewDetails(id),
      }
    ];
    private ticketsUrl = './assets/tickets-list.json';
    
    
    sortOptions = [
      { labelEn: 'Show all tickets', labelAr: 'عرض جميع التذاكر', value: '0' },
      { labelEn: 'Completed', labelAr: 'مكتمل', value: '1' },
      { labelEn: 'In progress', labelAr: 'قيد الإجراء', value: '2' }
    ];
    
        selectedSort: string = 'عرض جميع الطلبات';
        totalResults: number = 10;
      
      constructor(
        private breadcrumbService: BreadcrumbService,
        private translateService : TranslateService,
        private http: HttpClient,
        private router: Router,
      ) {}
      ngOnInit() {
        this.breadcrumbService.setBreadcrumb([
          {
            routeNameEn: 'Help & support',
            routeNameAr: 'الدعم والمساعدة',
            routerLink: '/support',
          },
          {
            routeNameEn: 'Tickets list',
            routeNameAr: 'قائمة التذاكر',
          },
        ]);
  
        
    
        this.http.get<TableItem[]>(this.ticketsUrl).subscribe(
          (data: TableItem[]) => {
            this.ticketsList = data;
            this.ordersNumber = this.ticketsList.length;
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
        
        this.router.navigate(['/support/ticket-details', id]);
      } 
  
      onSortChange(sortValue: string) {
       this.selectedSort =sortValue
    }
  
    deleteOrder(id: string) {
      console.log(`Deleting order ${id}`);
      this.ticketsList = this.ticketsList.filter(order => order!.orderNumber!.en !== id);
    }
  
    getActionButtons(): ActionButton[] {
      const buttons = [
        {
          title: "viewDetails",
          icon: 'pi-eye',
        imgPath: "./assets/images/eye.svg",
          class: 'view-details',
          func: (id: string) => this.viewDetails(id)
        }
      ];
    
   
    
      return buttons;
    }
  
}
