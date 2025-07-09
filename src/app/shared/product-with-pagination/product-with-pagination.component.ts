import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { Product } from '../../core/models/product';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-with-pagination',
  standalone: true,
  imports: [
    DropdownModule,
    TabViewModule,
    CardModule,
    PaginatorModule,
    ButtonModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './product-with-pagination.component.html',
  styleUrl: './product-with-pagination.component.scss',
})
export class ProductWithPaginationComponent implements OnInit {
  private productsUrl = './assets/products.json';
  private suppliersUrl = './assets/suppliers.json';
  currentLanguage: string = 'ar';

  sortOptions = [
    { label: 'shopping.sortNew', value: 'newest' },
    { label: 'shopping.sortOld', value: 'oldest' },
  ];
  selectedSort: string = 'newest';
  totalResults: number = 10;

  // Pagination
  rowsPerPage: number = 12;
  currentPage: number = 0;
  visibleProducts: Product[] = [];
  products: Product[] = [];
  suppliers!: Product[];

  constructor(
    private http: HttpClient,
    private translateService: TranslateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentLanguage = this.translateService.currentLang || 'ar';

    this.translateService.onLangChange.subscribe((lang) => {
      this.currentLanguage = lang.lang;
    });
    this.http.get<Product[]>(this.productsUrl).subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.http.get<Product[]>(this.suppliersUrl).subscribe(
      (data: Product[]) => {
        this.suppliers = data;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
    this.updateVisibleProducts();
  }

  // Update visible products based on pagination
  updateVisibleProducts() {
    const startIndex = this.currentPage * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    this.visibleProducts = this.products.slice(startIndex, endIndex);
  }

  // Pagination event
  paginate(event: any) {
    this.currentPage = event.page;
    this.updateVisibleProducts();
  }

  onSortChange(sortValue: string) {
    if (sortValue === 'newest') {
      this.products.sort(
        (a, b) =>
          new Date(b.dateUploaded).getTime() -
          new Date(a.dateUploaded).getTime()
      );
    } else if (sortValue === 'oldest') {
      this.products.sort(
        (a, b) =>
          new Date(a.dateUploaded).getTime() -
          new Date(b.dateUploaded).getTime()
      );
    }

    this.updateVisibleProducts();
  }

  navigateProductDetails(id: number) {
    this.router.navigate(['/product', id]);
  }
}
