import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../core/services/breadcrumb.service';
import { TranslateService } from '@ngx-translate/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicPopupComponent } from '../../shared/dynamic-popup/dynamic-popup.component';
import { SuccessTicketComponent } from './components/success-ticket/success-ticket.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-request',
  templateUrl: './help-request.component.html',
  styleUrl: './help-request.component.scss',
  providers: [DialogService],
})
export class HelpRequestComponent implements OnInit {
  currentLanguage: string = 'ar';
  subjects: { labelAr: string; labelEn: string; value: string }[] = [];
  priorities: { labelAr: string; labelEn: string; value: string }[] = [];
  selectedSubject: string = 'help.selectSubject';
  selectedPriority: string = '';
  helpText: string = '';
  showRequired: boolean = false;
  maxFileSize = 5 * 1024 * 1024;
  acceptFormats: string[] = ['image/jpeg', 'image/png', 'application/pdf'];
  selectedFiles: File[] = [];
  showRequiredFiles: boolean = false;
  hasInvalidFiles: boolean = false;
  ref: DynamicDialogRef | undefined;

  constructor(
    private breadcrumbService: BreadcrumbService,
    private translateService: TranslateService,
    public dialogService: DialogService,
    private router : Router
  ) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb([
      {
        routeNameEn: 'Help & support',
        routeNameAr: 'الدعم والمساعدة',
        routerLink: '/support',
      },
    ]);

    this.subjects = [
      {
        labelAr: 'مشكلة في تسجيل الدخول',
        labelEn: 'Login issue',
        value: 'help.subject1',
      },
      {
        labelAr: 'طلب تحديث معلومات الحساب',
        labelEn: 'Account information update',
        value: 'help.subject2',
      },
      {
        labelAr: 'استفسار عن سياسة الخصوصية',
        labelEn: 'Privacy policy inquiry',
        value: 'help.subject3',
      },
      {
        labelAr: 'استفسار حول الدفع',
        labelEn: 'Payment inquiry',
        value: 'help.subject4',
      },
    ];

    this.priorities = [
      { labelAr: 'عالية', labelEn: 'High', value: 'help.priority1' },
      { labelAr: 'منخفضة', labelEn: 'Low', value: 'help.priority2' },
      { labelAr: 'متوسطة', labelEn: 'Medium', value: 'help.priority3' },
    ];

    this.translateService.onLangChange.subscribe((lang) => {
      this.currentLanguage = lang.lang;

      this.updateSelectedLabels();
    });

    this.updateSelectedLabels();
  }

  updateSelectedLabels() {
    if (this.currentLanguage === 'ar') {
      this.selectedSubject = this.subjects[0].value;
      this.selectedPriority = this.priorities[0].value;
    } else {
      this.selectedSubject = this.subjects[0].value;
      this.selectedPriority = this.priorities[0].value;
    }
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
    console.log(file.type, isValidSize && isValidFormat);

    return isValidSize && isValidFormat;
  }

  deleteFile(index: number) {
    this.selectedFiles.splice(index, 1);
    this.checkInvalidFiles();
  }

  checkInvalidFiles() {
    if(this.selectedFiles.length< 1 ){
      this.showRequiredFiles = true;
      return;
    }else{
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
            this.router.navigate(['/support/tickets-list']);
     });
  }
}
