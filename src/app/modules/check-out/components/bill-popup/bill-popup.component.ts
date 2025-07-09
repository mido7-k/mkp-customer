import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-bill-popup',
  templateUrl: './bill-popup.component.html',
  styleUrl: './bill-popup.component.scss'
})
export class BillPopupComponent implements OnInit{
invoice: string ='';
imagePath: string ='';
status: string = '';



   constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {}
  
    ngOnInit(): void {
    this.invoice = this.config.data.invoiceNumber;
    this.imagePath = this.config.data.imagePath;
    this.status = this.config.data.background;
    }

    copyInvoice(invoiceText: HTMLParagraphElement): void {
      const textToCopy = invoiceText.innerText;
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Invoice copied to clipboard!');
    }

    closeDialog(){
      this.ref.close();
    }
  
}
