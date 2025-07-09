import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-specs',
  templateUrl: './product-specs.component.html',
  styleUrl: './product-specs.component.scss'
})
export class ProductSpecsComponent implements OnInit{

  currentLanguage: string = 'ar';

  productSpecs = [
    { key: 'totalWeight', en: '500 kg', ar: '500 كجم' },
    { key: 'enginePower', en: '150 horsepower', ar: '150 حصان' },
    { key: 'cylinderCount', en: '6 cylinders', ar: '6 أسطوانات' },
    { key: 'fuelTankCapacity', en: '100 liters', ar: '100 لتر' },
    { key: 'driveSystem', en: '4WD', ar: 'دفع رباعي' },
    { key: 'transmissionSystem', en: 'Automatic', ar: 'أوتوماتيكي' },
    { key: 'tractionCapacity', en: '2000 kg', ar: '2000 كجم' },
    { key: 'fuelType', en: 'Diesel', ar: 'ديزل' },
    { key: 'maxSpeed', en: '180 km/h', ar: '180 كم/س' },
    { key: 'deliveryMethods', en: 'Online, In-store pickup', ar: 'عبر الإنترنت، استلام من المتجر' }
  ];

  constructor(private translateService: TranslateService){}

  ngOnInit(): void {
    this.currentLanguage = this.translateService.currentLang || 'ar';

    this.translateService.onLangChange.subscribe(lang => {
      this.currentLanguage = lang.lang;
    });
  }

  
}
