import { Component, Input, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ActionButton } from '../../core/models/action-btn';
import { RouterModule } from '@angular/router';
import { TagModule } from 'primeng/tag';
import { TableItem } from '../../core/models/orders';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TranslateModule, TableModule, CommonModule, PaginatorModule,ButtonModule,RouterModule, TagModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{
  @Input() dataList!: TableItem[]; 
  @Input() actionButtons:  ActionButton[] = [];
  currentLanguage: string = 'ar';
  @Input() getActionButtons!: (item: TableItem) => ActionButton[]; 
  rowsPerPage: number = 12;
  currentPage: number = 0;
  visibleProducts:  TableItem[]= [];
  totalResults: number = 10;

  constructor(private translateService: TranslateService){}

  ngOnInit(): void {
    this.currentLanguage = this.translateService.currentLang || 'ar'; 

this.translateService.onLangChange.subscribe(lang => {
  this.currentLanguage = lang.lang;
});
  }
  updateVisibleProducts() {
    const startIndex = this.currentPage * this.rowsPerPage;
    const endIndex = startIndex + this.rowsPerPage;
    this.visibleProducts = this.dataList.slice(startIndex, endIndex);
  }

  paginate(event: any) {
    this.currentPage = event.page;
    this.updateVisibleProducts();
  }

  


}