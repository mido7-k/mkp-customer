import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-process-steps',
  templateUrl: './process-steps.component.html',
  styleUrl: './process-steps.component.scss',
  providers: [MessageService],
})
export class ProcessStepsComponent implements OnInit, OnChanges {
  date: string = '17 أكتوبر 2024 الساعة 7:42 مساءً';
  amount: string = '1';
  currentLanguage: string = 'ar';
  historyDate: string = '23 Jan, 2024 at 7:32 PM';
  items!: MenuItem[];
  activeIndex: number = 0;
  stepValue: number = 0;
  @Input() status!: string;

  constructor(
    private translateService: TranslateService,
    public messageService: MessageService
  ) {}

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }
  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((lang) => {
      this.currentLanguage = lang.lang;
    });

    this.items = [
      {
        label: 'تم تقديم الطلب',
      },
      {
        label: 'قيد التجهيز',
      },
      {
        label: 'قيد الشحن',
      },
      {
        label: 'تم التوصيل',
      },
    ];

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['status']) {
      const currentStatus = changes['status'].currentValue;

      console.log('Status changed:', currentStatus);

      if (currentStatus === 'orders.In Progress') {
        this.activeIndex = 1;
        this.stepValue = 33;
      } else if (currentStatus === 'orders.In shipping' || currentStatus === 'orders.In delivery') {
        this.activeIndex = 2;
        this.stepValue = 66;
      } else {
        this.activeIndex = 3;
        this.stepValue = 100;
      }
    }
  }
}
