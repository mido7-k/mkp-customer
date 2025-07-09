import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputOtpModule } from 'primeng/inputotp';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-otp-popup',
  standalone: true,
  imports: [TranslateModule, FormsModule, InputOtpModule, ButtonModule],
  templateUrl: './otp-popup.component.html',
  styleUrl: './otp-popup.component.scss'
})
export class OtpPopupComponent implements OnInit, OnDestroy{
mobile? : number
value: string = '';
  timer: number = 3;
  interval: any;
  showTimer: boolean = true;
  status: string = '';
  title: string = '';
  subTitle: string = '';
  btnTitle: string = '';
  imagePath: string = '';
  orderOtp: boolean = false;
  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {}

  ngOnInit(): void {
  this.mobile = this.config.data.mobile;
  this.title= this.config.data.title;
  this.subTitle= this.config.data.subTitle;
  this.btnTitle= this.config.data.btnTitle;
  this.imagePath = this.config.data.imagePath;
  this.status = this.config.data.background;
  this.orderOtp = this.config.data.orderOtp;

  this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.showTimer = false;
        clearInterval(this.interval); 
      }
    }, 1000); 
  }

  timerFormat(): string {
    const minutes = Math.floor(this.timer / 60);
    const seconds = this.timer % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  submitOtp() {
    if(this.config.data){
      this.ref.close(this.config.data);
    }
  }

  resendOtp() {
    this.showTimer = true;
    this.timer = 30; 
    this.startTimer(); 
  }

  isOtpValid(): boolean {
    return typeof this.value === 'string' && this.value.length === 5;
  }

  
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}