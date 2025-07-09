import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { AllFilters, FilterCategories, FilterProduct, Item } from '../../core/models/filter-products';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-filter',
  standalone: true,
  imports: [
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './nav-filter.component.html',
  styleUrl: './nav-filter.component.scss',
})
export class NavFilterComponent implements OnInit {
  @ViewChild('filterPanel') filterPanel?: ElementRef;
  @ViewChild('searchIcon') searchIcon?: ElementRef;

  categories: FilterCategories[] = [];
  products: FilterProduct[] = [];
  selectedCategory: FilterCategories | null = null;
  selectedProducts: Item[] = [];
  showFilters: boolean = false;
  searchInputValue: string = '';
  filteredCategory: FilterCategories | null = null;
  filteredProducts: Item[] = [];
  currentLanguage: string = 'ar';

  constructor(private http: HttpClient, private translate: TranslateService) {}

  ngOnInit(): void {
    this.currentLanguage = this.translate.currentLang || 'ar';

    this.translate.onLangChange.subscribe((lang) => {
      this.currentLanguage = lang.lang;
    });
    this.http.get<AllFilters>('assets/filter-data.json').subscribe(
      (data: AllFilters) => {
        this.categories = data.categories;
        this.products = data.products;
        if (this.categories.length > 0) {
          this.selectCategory(this.categories[0]);
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  selectCategory(category: FilterCategories): void {
    this.selectedCategory = category;

    const categoryProducts = this.products.find(
      (p) => p.categoryId === category.id
    );
    if (categoryProducts) {
      this.selectedProducts = categoryProducts.items;
    }
  }

  onCategoryKeydown(event: KeyboardEvent, category: FilterCategories): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.selectCategory(category);
    }
  }

  toggleShowFilter(): void {
    this.showFilters = !this.showFilters;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (
      this.filterPanel &&
      !this.filterPanel.nativeElement.contains(event.target) &&
      !this.searchIcon?.nativeElement.contains(event.target)
    ) {
      this.showFilters = false;
    }
  }
}