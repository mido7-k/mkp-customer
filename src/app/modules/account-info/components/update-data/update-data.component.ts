import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrl: './update-data.component.scss',
})
export class UpdateDataComponent implements OnInit {
  verified: boolean = false;
  verifiedtitle: string = '';
  verifiedSubtitle: string = '';
  verifiedBackground: string = '';
  verifiedImgPath: string = '';
  unverifiedtitle: string = '';
  unverifiedSubtitle: string = '';
  unverifiedBackground: string = '';
  unverifiedImgPath: string = '';

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.verifiedtitle = this.config.data.verifiedtitle;
    this.verifiedSubtitle = this.config.data.verifiedSubtitle;
    this.verifiedBackground = this.config.data.verifiedBackground;
    this.verifiedImgPath = this.config.data.verifiedImgPath;
    this.unverifiedtitle = this.config.data.unverifiedtitle;
    this.unverifiedSubtitle = this.config.data.unverifiedSubtitle;
    this.unverifiedBackground = this.config.data.unverifiedBackground;
    this.unverifiedImgPath = this.config.data.unverifiedImgPath;
  }

  closeDialog() {
    this.ref.close();
  }
}
