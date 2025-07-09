import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit{
  @ViewChildren('thumbnailItem') thumbnailItems!: QueryList<ElementRef>;
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
  constructor(private renderer: Renderer2) {
    this.images = Array.from({ length: 16 }, (_, index) => ({
      itemImageSrc: `./assets/images/green-carousel/${index + 1}.svg`,
      thumbnailImageSrc: `./assets/images/green-carousel/${index + 1}.svg`,
      title: this.titles[index]
    }));
  }


  ngOnInit(): void {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.simulateHoverOrClick();
    }, 0);
  }


  simulateHoverOrClick() {
    const firstThumbnail = this.thumbnailItems.toArray()[0]; 

    if (firstThumbnail) {
      this.renderer.listen(firstThumbnail.nativeElement, 'mouseover', () => {

      });
      firstThumbnail.nativeElement.click(); 
    }
  }

}
