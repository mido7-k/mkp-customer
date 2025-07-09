import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { SingleContract } from '../../../../core/models/single-contract';
import { Product } from '../../../../core/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purposes',
  templateUrl: './purposes.component.html',
  styleUrl: './purposes.component.scss'
})
export class PurposesComponent implements OnInit{
  searchValue: string = '';
  purposesNumber: number = 24;
  private contractsUrl = './assets/single-contract.json';
  contracts: SingleContract[]= [];
  currentLanguage: string = "ar";
  responsiveOptions: any[] | undefined;
  activeContract:boolean = false;
  activeContractId: string | null = null;

  products: Product[] = []
  private jsonUrl = './assets/products.json';

  constructor(private http: HttpClient, private translateService: TranslateService,private router :Router){}
ngOnInit(): void {
     this.http.get<SingleContract[]>(this.contractsUrl).subscribe(
    (data: SingleContract[]) => {
    this.contracts = data
    
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
   );
   this.http.get<Product[]>(this.jsonUrl).subscribe(
    (data: Product[]) => {
    this.products = data
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
   );

   this.currentLanguage = this.translateService.currentLang || 'ar'; 

   this.translateService.onLangChange.subscribe(lang => {
     this.currentLanguage = lang.lang;
   });
   
      this.responsiveOptions = [
       {
         breakpoint: '1400px',
         numVisible: 4,
         numScroll: 1
     },
       {
           breakpoint: '1199px',
           numVisible: 3,
           numScroll: 1
       },
       {
           breakpoint: '991px',
           numVisible: 2,
           numScroll: 1
       },
       {
           breakpoint: '767px',
           numVisible: 1,
           numScroll: 1
       }
   ];
  }
  toggleActiveContract(contractId: string): void {
    this.activeContractId = this.activeContractId === contractId ? null : contractId;
  }

    navigateShopping(){
    this.router.navigate(['/shopping']);
  }
}
