import {  Component,  OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-success-popup',
  standalone: true,
  imports: [TranslateModule, RouterModule, DatePipe ],
  templateUrl: './success-popup.component.html',
  styleUrl: './success-popup.component.scss'
})
export class SuccessPopupComponent implements OnInit{

  invoice: string ='';
  imagePath: string ='';
  status: string = '';
  paymentMethod: string = '';
  deliveryMethod: string = '';
  today: Date = new Date();
  todayEn: Date = new Date();
  formattedDate: string = '';
  currentLanguage: string = "ar";
     constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig,  private translateService: TranslateService
     ) {
     }
    
      ngOnInit(): void {
        this.translateService.onLangChange.subscribe(lang => {
          this.currentLanguage = lang.lang;
 
        });   
      this.invoice = this.config.data.invoiceNumber;
      this.imagePath = this.config.data.imagePath;
      this.status = this.config.data.background;
      this.paymentMethod = this.config.data.paymentMethod;
      this.deliveryMethod = this.config.data.deliveryMethod;
      this.formattedDate = this.formatDateToArabic(this.todayEn);
      }

      formatDateToArabic(date: Date): string {
        const options: Intl.DateTimeFormatOptions = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };
        const arabicDate = new Intl.DateTimeFormat('ar', options).format(date);
        return arabicDate;
      }
  
      closeDialog(){
        this.ref.close();
      }
    
}
