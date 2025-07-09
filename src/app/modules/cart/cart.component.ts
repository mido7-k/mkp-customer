import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contract } from '../../core/models/contracts';
import { BreadcrumbService } from '../../core/services/breadcrumb.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  
currentLanguage: string = "ar";
private contractsUrl = './assets/contracts-list.json';
restPrice:number = 30000;
fundPrice: number = 275000;
totalPrice: number = 305000;
contractsList: Contract[] = [];
  constructor(
    private breadcrumbService: BreadcrumbService,
    private http: HttpClient, private translateService: TranslateService
  ) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb([
      { routeNameEn: 'Contracts list', routeNameAr: 'قائمة العقود', routerLink: '/contracts' },
      { routeNameEn: 'Contracts cart', routeNameAr: 'سلة العقود', routerLink: '' },
    ]);

    this.translateService.onLangChange.subscribe(lang => {
      this.currentLanguage = lang.lang;
    });    

    this.http.get<Contract[]>(this.contractsUrl).subscribe(
      (data: Contract[]) => {
      this.contractsList = data
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
     );
  }

  updateTotalPrice(price: number) {
    this.totalPrice = price; 
    this.restPrice = this.totalPrice - this.fundPrice;
  }
}
