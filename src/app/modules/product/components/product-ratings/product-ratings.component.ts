import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../../../../core/models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-ratings',
  templateUrl: './product-ratings.component.html',
  styleUrl: './product-ratings.component.scss'
})
export class ProductRatingsComponent implements OnInit, OnChanges {

  value!: number;
  rating: number | undefined;
  @Input() products: Product[] = [];
  product?: Product;
  totalRatings: number = 2350;
  rated: boolean = false;

  ratings = [
    { rateNumber: 5, image: './assets/images/stars/1.svg', color: '#29912D',value: 12 },
    { rateNumber: 4, image: './assets/images/stars/2.svg', color: '#97BE1B', value: 76 },
    { rateNumber: 3, image: './assets/images/stars/3.svg', color: '#F2AC30', value: 6 },
    { rateNumber: 2, image: './assets/images/stars/4.svg', color: '#F36C31', value: 2 },
    { rateNumber: 1, image: './assets/images/stars/5.svg', color: '#C73A3A', value: 4 }
  ];
  constructor(private route: ActivatedRoute) { }


ngOnInit(): void {
  const productId = this.route.snapshot.paramMap.get('id');
  if (productId) {
    this.product = this.products.find(p => p.id.toString() === productId.toString());    
    this.rating = this.product?.rating
  }

}

ngOnChanges(changes: SimpleChanges): void {
  if (changes['products'] && this.products.length > 0) {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product = this.products.find(p => p.id.toString() === productId.toString());
      this.rating = this.product?.rating
    }
  }
}

  setRated(){
    this.rated = true;
    this.totalRatings++
  }


}
