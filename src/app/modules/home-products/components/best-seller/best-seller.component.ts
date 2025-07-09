import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent implements OnInit{
  currentLanguage: string = "ar";
  products: Product[] = []
  private jsonUrl = './assets/products.json';
  
  constructor(private http: HttpClient,  private translateService: TranslateService,private router :Router){
    
  }
  ngOnInit(): void {
    this.currentLanguage = this.translateService.currentLang || 'ar'; 

this.translateService.onLangChange.subscribe(lang => {
  this.currentLanguage = lang.lang;
});
   this.http.get<Product[]>(this.jsonUrl).subscribe(
    (data: Product[]) => {
    this.products = data
    
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
   );
  }

  navigateShopping(){
    this.router.navigate(['/shopping']);
  }
}
