import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from '../models/menuItem';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  private breadcrumbItemsSubject = new BehaviorSubject<MenuItem[]>([]);
  breadcrumbItems$ = this.breadcrumbItemsSubject.asObservable();

  constructor(private translateService: TranslateService) {}

  setBreadcrumb(items: MenuItem[]) {
    const currentLang = this.translateService.currentLang;

    const mappedItems = items.map((item) => ({
      ...item,
      label: currentLang === 'ar' ? item.routeNameAr : item.routeNameEn,
    }));
    this.breadcrumbItemsSubject.next(mappedItems);
  }
}
