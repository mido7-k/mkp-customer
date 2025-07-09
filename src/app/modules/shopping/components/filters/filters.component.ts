import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent implements OnInit{
  searchProductsValue: string = '';
  rangePrices: number[] = [150, 350];
  fromPrice: number = this.rangePrices[0];
  toPrice: number = this.rangePrices[1];
  currentDirection: string = 'rtl'
  currentLanguage: string = 'ar'

constructor(private translateService:  TranslateService){}

  updatePrices(): void {
    this.fromPrice = this.rangePrices[0];
    this.toPrice = this.rangePrices[1];
  }

  ngOnInit(): void {
    this.currentLanguage = this.translateService.currentLang || 'ar'; 
    this.translateService.onLangChange.subscribe(lang => {
      this.currentLanguage = lang.lang;
      this.currentLanguage =='ar' ? this.currentDirection = 'rtl':  this.currentDirection = 'ltr'
    });
    
  }

}
