import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../core/models/product';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-product-brief',
  templateUrl: './product-brief.component.html',
  styleUrls: ['./product-brief.component.scss']
})
export class ProductBriefComponent implements OnInit, OnChanges {

  @Input() products: Product[] = [];
  product?: Product;
  currentLanguage: string = 'ar';
  amount: number = 0o1;


  constructor(private route: ActivatedRoute, private translateService: TranslateService) { }

  ngOnInit(): void {
    this.currentLanguage = this.translateService.currentLang || 'ar';

    this.translateService.onLangChange.subscribe(lang => {
      this.currentLanguage = lang.lang;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products'] && this.products.length > 0) {
      const productId = this.route.snapshot.paramMap.get('id');
      if (productId) {
        this.product = this.products.find(p => p.id.toString() === productId.toString());
      }
    }
  }

  increment(): void {
    this.amount++;
  }

  decrement(): void {
    if (this.amount > 0) {
      this.amount--;
    }
  }
}
