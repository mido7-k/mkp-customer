import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-filtered-products',
  templateUrl: './filtered-products.component.html',
  styleUrl: './filtered-products.component.scss',
})
export class FilteredProductsComponent implements OnInit {

  currentLanguage: string = 'ar';


constructor( private translateService: TranslateService){}

   ngOnInit() {

    this.translateService.onLangChange.subscribe(lang => {
      this.currentLanguage = lang.lang;
    });    
  }
}
