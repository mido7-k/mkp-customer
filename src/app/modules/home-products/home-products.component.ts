import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrl: './home-products.component.scss'
})
export class HomeProductsComponent implements OnInit{
  private productsUrl = './assets/products.json';
  private suppliersUrl = './assets/suppliers.json';
  private seedsUrl = './assets/seeds.json';
Recommendedtitle: string ='home.recommended' ;
recommendedSubTitle: string = 'home.subRecommended';
recommendedProducts!: Product[] ;
suppliersTitle: string ='home.suppliers' ;
suppliers!:Product[] ;
seedsArray!:Product[] ;
coffee: string = 'home.coffee';
subCoffee : string = 'home.subCoffee';
seeds: string = 'home.seeds';
subSeeds : string = 'home.subSeeds';

constructor(private http: HttpClient){}
ngOnInit(): void {
     this.http.get<Product[]>(this.productsUrl).subscribe(
    (data: Product[]) => {
    this.recommendedProducts = data
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
   );

   this.http.get<Product[]>(this.suppliersUrl).subscribe(
    (data: Product[]) => {
    this.suppliers = data
    
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
   );
   this.http.get<Product[]>(this.seedsUrl).subscribe(
    (data: Product[]) => {
    this.seedsArray = data
    
    },
    (error) => {
      console.error('Error fetching data:', error);
    }
   );
}
}
