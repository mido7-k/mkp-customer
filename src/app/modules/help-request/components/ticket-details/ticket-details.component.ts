import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbService } from '../../../../core/services/breadcrumb.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicPopupComponent } from '../../../../shared/dynamic-popup/dynamic-popup.component';
import { SuccessTicketComponent } from '../success-ticket/success-ticket.component';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrl: './ticket-details.component.scss',
  providers: [DialogService],
})
export class TicketDetailsComponent implements OnInit {
  ticketId!: string;
  ref: DynamicDialogRef | undefined;
  replySent: boolean = false;
  helpText: string = '';
  showRequired: boolean = false;
  maxFileSize = 5 * 1024 * 1024;
  acceptFormats: string[] = ['image/jpeg', 'image/png', 'application/pdf'];
  selectedFiles: File[] = [];
  showRequiredFiles: boolean = false;
  hasInvalidFiles: boolean = false;


  ticket = {
    nameLabel: 'الاسم الكامل',
    nameValue: 'محمد الدوسري',
    emailLabel: 'الإيميل',
    emailValue: 'name@email.com',
    cdateLabel: 'تاريخ الإنشاء',
    cdateValue: ' 28/12/2024',
    ldateLabel: 'تاريخ آخر تحديث',
    ldateValue: ' 15/01/2024',
    subjectLabel: 'الموضوع',
    subjectValue: 'استفسار حول الدفع',
    priorityLabel: 'الأولوية',
    priorityValue: 'عالية',
    statusLabel: 'حالة التذكرة',
    statusValue: 'قيد الإجراء',
  };

  constructor(
    private breadcrumbService: BreadcrumbService,
    private translateService: TranslateService,
    private router: Router,
    private route: ActivatedRoute,
    public dialogService: DialogService
  ) {}
  ngOnInit() {
    this.breadcrumbService.setBreadcrumb([
      {
        routeNameEn: 'Help & support',
        routeNameAr: 'الدعم والمساعدة',
        routerLink: '/support',
      },
      {
        routeNameEn: 'Tickets list',
        routeNameAr: 'قائمة التذاكر',
        routerLink: '/support/tickets-list',
      },
      {
        routeNameEn: 'Show ticket details',
        routeNameAr: 'عرض تفاصيل التذكرة',
      },
    ]);

    this.route.params.subscribe((params) => {
      this.ticketId = params['id'];
      console.log('Contract ID:', this.ticketId);
    });
  }

  closeTicket() {
    this.ref = this.dialogService.open(DynamicPopupComponent, {
      width: '25%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      breakpoints: {
        '1200px': '40vw',
        '960px': '75vw',
        '640px': '90vw',
      },
      data: {
        title: 'help.close',
        subTitle: 'help.subClose',
        btnTitle: 'orders.confirm',
        imagePath: './assets/images/popup-exclamation.svg',
        background: 'bg-error',
      },
    });

    this.ref.onClose.subscribe((proceed: boolean) => {
      if (proceed) {
        this.router.navigate(['/support/tickets-list']);
      }
    });
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files) {
      const newFiles = Array.from(input.files);
      this.selectedFiles = [...this.selectedFiles, ...newFiles];
    }
    this.checkInvalidFiles();
  }

  isFileValid(file: File): boolean {
    const isValidSize = file.size <= this.maxFileSize;
    const isValidFormat = this.acceptFormats.includes(file.type);
    return isValidSize && isValidFormat;
  }

  deleteFile(index: number) {
    this.selectedFiles.splice(index, 1);
    this.checkInvalidFiles();
  }

  checkInvalidFiles() {
    if (this.selectedFiles.length < 1) {
      this.showRequiredFiles = true;
      this.hasInvalidFiles = false;
      return;
    } else {
      this.showRequiredFiles = false;
      this.hasInvalidFiles = this.selectedFiles.some(
        (file) => !this.isFileValid(file)
      );
    }
  }


  confirmPopup() {
    this.checkInvalidFiles();

    if (this.hasInvalidFiles) {
      return;
    }

    if (!this.helpText.trim()) {
      this.showRequired = true;
      return;
    } else {
      this.showRequired = false;
    }

    this.ref = this.dialogService.open(DynamicPopupComponent, {
      width: '25%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      breakpoints: {
        '1200px': '40vw',
        '960px': '75vw',
        '640px': '90vw',
      },
      data: {
        title: 'help.confirmSend',
        subTitle: 'help.sureSend',
        btnTitle: 'orders.confirm',
        imagePath: './assets/images/warn-i.svg',
        background: 'bg-warning',
      },
    });

    this.ref.onClose.subscribe((proceed: boolean) => {
      if (proceed) {
        this.successTicketPopup();
      }
    });
  }

  successTicketPopup(){
    this.ref = this.dialogService.open(SuccessTicketComponent, {
      width: '30%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      breakpoints: {
        '1200px': '40vw',
        '960px': '75vw',
        '640px': '90vw',
      },
      data: {
        title: 'help.successSend',
        subTitle: 'help.subSuccess',
        msg: this.helpText,
      },
    });

     this.ref.onClose.subscribe(() => {
              this.replySent = true;
     });
  }


  
}