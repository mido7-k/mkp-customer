import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Product } from '../../core/models/product';
import { Router } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CarouselModule, TranslateModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit{

  currentLanguage: string = "ar";
  responsiveOptions: any[] | undefined;
  activeContract:boolean = false;
  activeContractId: string | null = null;

  products: Product[] = []
  private jsonUrl = './assets/products.json';

  constructor(private http: HttpClient, private translateService: TranslateService,private router :Router){}
ngOnInit(): void {
 
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

  navigateProductDetails(id: number){
    this.router.navigate(['/product', id]);
  }
}
