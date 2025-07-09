import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { VerifyDataComponent } from '../verify-data/verify-data.component';
import { OtpPopupComponent } from '../../../../shared/otp-popup/otp-popup.component';
import { UpdateDataComponent } from '../update-data/update-data.component';


interface InfoData{
  email:string;
  mobile:string;
}
@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss',
  providers: [DialogService]
})
export class InfoCardComponent {


  ref: DynamicDialogRef | undefined;
  mobile: string = '';
  email: string = '';

  constructor(public dialogService: DialogService){}
  
  showAddDataDialog() {
    this.ref = this.dialogService.open(VerifyDataComponent, {
      width: '27%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
      data: {
        name: 'ادخل البيانات التالية',
        background: 'bg-warning',
        imgPath: './assets/images/warn-i.svg',
      },
    });

    this.ref.onClose.subscribe((data: { mobile: string; email: string }) => {
      if (data) {
  
        this.showOtpDialog(data);
      }
    });
  }


  showOtpDialog(data : InfoData) {
    this.ref = this.dialogService.open(OtpPopupComponent, {
      width: '27%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw'
      },
      data: data
    });

    this.ref.onClose.subscribe((data: InfoData) => {
      if (data) {
        this.mobile = data.mobile;
        this.email = data.email;
      }
    });
}

openLinkDialog() {
  this.ref = this.dialogService.open(UpdateDataComponent, {
    width: '27%',
    contentStyle: { 'max-height': '500px', overflow: 'auto' },
    breakpoints: {
      '960px': '75vw',
      '640px': '90vw',
    },
    data: {
      verifiedtitle: 'accountInfo.linkSent',
      verifiedSubtitle: 'accountInfo.linkSentToMail',
      verifiedBackground: 'bg-success',
      verifiedImgPath: './assets/images/popup-check.svg',
      unverifiedtitle: 'accountInfo.updateAccount',
      unverifiedSubtitle: 'accountInfo.plzCheckData',
      unverifiedBackground: 'bg-warning',
      unverifiedImgPath: './assets/images/warn-i.svg',
    },
  });

  this.ref.onClose.subscribe((data: InfoData) => {
    if (data) {
      this.mobile = data.mobile;
      this.email = data.email;
    }
  });
}

}