import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BreadcrumbService } from '../../core/services/breadcrumb.service';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [BreadcrumbModule, CommonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent implements OnInit {
  currentLang: string = 'ar';
  items: MenuItem[] = [];
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  constructor(
    private breadcrumbService: BreadcrumbService,
    private translateService: TranslateService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.translateService.onLangChange.subscribe(() => {
      this.updateHomeLabel();
    });

    this.translateService.use(this.translateService.currentLang || 'ar').subscribe(() => {
      this.updateHomeLabel();
    });
    this.breadcrumbService.breadcrumbItems$.subscribe((items: MenuItem[]) => {
      this.items = items;
      this.cd.detectChanges(); 
    });
  }

  private updateHomeLabel() {
    this.currentLang = this.translateService.currentLang || 'ar';
    this.home = {
      ...this.home,
      label: this.currentLang === 'ar' ? 'الصفحة الرئيسية' : 'Home',
    };
    this.cd.detectChanges();
  }
}
