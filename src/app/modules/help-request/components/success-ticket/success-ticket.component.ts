import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-success-ticket',
  standalone: true,
  imports: [TranslateModule, DatePipe],
  templateUrl: './success-ticket.component.html',
  styleUrl: './success-ticket.component.scss'
})
export class SuccessTicketComponent implements OnInit{
  title: string = '';
  subTitle: string = '';
  msg: string = '';
  today: Date = new Date();

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,    
  ) {}

  ngOnInit(): void {
    this.title= this.config.data.title;
    this.subTitle= this.config.data.subTitle;
    this.msg = this.config.data.msg;

  }

  closeDialog() {
    this.ref.close();
  }
}
