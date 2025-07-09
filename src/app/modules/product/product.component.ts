import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../core/services/breadcrumb.service';
import { Product } from '../../core/models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  private productsUrl = './assets/products.json';
  products: Product[] = [];
  fundLoan: string = 'product.fundLoan';
  subfundLoan : string = 'product.subfundLoan'
  constructor(private breadcrumbService: BreadcrumbService, private http: HttpClient) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb([
      { routeNameEn: 'Shopping', routeNameAr: 'تسوق', routerLink: '/shopping' },
      { routeNameEn: 'Product details', routeNameAr: 'تفاصيل المنتج'},

    ]);

    this.http.get<Product[]>(this.productsUrl).subscribe(
      (data: Product[]) => {
      this.products = data      
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
     );



    
  }

}
