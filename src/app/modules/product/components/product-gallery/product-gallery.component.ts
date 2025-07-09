import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrl: './product-gallery.component.scss'
})
export class ProductGalleryComponent implements OnInit{

  responsiveOptions: any[] | undefined;
  images: any[] = [];
titles: string[]= [
  'الجرارات والمعدات',
  'الهياكل الزراعية',
  'حلول معالجة المحاصيل',
  'أنظمة الري',
  'الري الآلي',
  'معدات الزراعة',
  'آلات زراعية',
  'أدوات زراعية',
  'خراطيم الري',
  'تكنولوجيا الزراعة',
  'أنظمة الري',
  'الري الآلي',
  'معدات الزراعة',
  'آلات زراعية',
  'أدوات زراعية',
  'خراطيم الري'
]
  constructor() {
    this.images = Array.from({ length: 6 }, (_, index) => ({
      itemImageSrc: `./assets/images/product-gallery/${index + 1}.svg`,
      thumbnailImageSrc: `./assets/images/product-gallery/${index + 1}.svg`,
      title: this.titles[index]
    }));
  }


  ngOnInit(): void {
    this.responsiveOptions = [
      // {
      //     breakpoint: '1024px',
      //     numVisible: 5
      // },
      // {
      //     breakpoint: '768px',
      //     numVisible: 3
      // },
      // {
      //     breakpoint: '560px',
      //     numVisible: 1
      // }
  ];
  }
}
