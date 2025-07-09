import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CarouselModule } from 'primeng/carousel';
import { Product } from '../../core/models/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, TranslateModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  currentLanguage: string = "ar";
  responsiveOptions: any[] | undefined;
  @Input() title!: string;
  @Input() subTitle: string = '';
  @Input() products: Product[]= [] ;
  @Input() circular?: boolean;
  @Input() Itemnumbers?: number;
  @Input() showAll: boolean = true;

  constructor(private translateService: TranslateService, private router: Router){
    
  }
  ngOnInit(): void {
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

  navigatehopping(){
    this.router.navigate(['/shopping']);
  }
}
