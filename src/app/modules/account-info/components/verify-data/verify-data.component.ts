import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-verify-data',
  templateUrl: './verify-data.component.html',
  styleUrl: './verify-data.component.scss',
})
export class VerifyDataComponent implements OnInit{
  visible: boolean = true;
  @Input() visibility: boolean = false;
  mobile: string = '';
  email: string = '';
  imagePath: string = '';
  status: string = '';

  constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {}

    ngOnInit(): void {

    this.imagePath = this.config.data.imgPath;
    this.status = this.config.data.background;
  }

  check() {
    this.ref.close({ mobile: this.mobile, email: this.email });
  }
  closeDialog() {
    this.ref.close();
  }
}