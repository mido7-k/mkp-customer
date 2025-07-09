import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-dynamic-popup',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './dynamic-popup.component.html',
  styleUrl: './dynamic-popup.component.scss',
})
export class DynamicPopupComponent implements OnInit {
  invoice: string = '';
  imagePath: string = '';
  status: string = '';
  title: string = '';
  subTitle: string = '';
  btnTitle: string = '';


  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.title= this.config.data.title;
    this.subTitle= this.config.data.subTitle;
    this.btnTitle= this.config.data.btnTitle;
    this.invoice = this.config.data.invoiceNumber;
    this.imagePath = this.config.data.imagePath;
    this.status = this.config.data.background;
  }

  proceed() {
    this.ref.close(true);
  }

  closeDialog() {
    this.ref.close();
  }
}
