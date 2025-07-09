import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.scss'
})
export class OrdersListComponent implements OnInit{
  tracktorAmount: number = 0o1;
  coolerAmount: number = 0o1;
  harvesterAmount: number = 0o1;
  tracktorPrice: number =185000;
  coolerPrice: number = 60000;
  harvesterPrice: number = 60000;
  totalPrice = this.tracktorPrice + this.coolerPrice + this.harvesterPrice;
  currentLanguage: string = "ar";
  @Output() totalPriceChange = new EventEmitter<number>();
    constructor(
     private translateService: TranslateService
    ) {}
  
    ngOnInit() {
      this.translateService.onLangChange.subscribe(lang => {
        this.currentLanguage = lang.lang;
      });    
  
    }

    
  increment(product: string): void {
    if(product==="tracktor"){
      this.tracktorAmount++;
    }else if(product==="cooler"){
      this.coolerAmount++
    }else{
      this.harvesterAmount++
    }
    this.calculateTotal();
  }

  decrement(product: string): void {
    if (this.tracktorAmount > 1 && product==="tracktor") {
      this.tracktorAmount--;
    }else if(this.coolerAmount > 1 && product==="cooler"){
      this.coolerAmount--
    }else{
      if(this.harvesterAmount > 1){
        this.harvesterAmount--
      }
    }
    this.calculateTotal();
  }

  calculateTotal(){
    this.totalPrice = (this.tracktorAmount*this.tracktorPrice) + (this.coolerAmount*this.coolerPrice) + (this.harvesterAmount*this.harvesterPrice);
    this.totalPriceChange.emit(this.totalPrice);
    console.log(this.totalPrice);
    
  }

}
