import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddAddressComponent } from '../../../../shared/add-address/add-address.component';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrl: './view-address.component.scss',
    providers: [DialogService]
})
export class ViewAddressComponent implements OnInit{
  loading: boolean = false;
  editAddressMode: boolean =false;
  allAddresses: string[] = [];
  private addressesUrl = './assets/address.json';
  chosenAddress: string = 'حي العقيق، شارع الأطلال- المبنى 7454 - رقم الوحدة ,19827  - الرياض, المملكة العربية السعودية  - 0572651405 (966)'
  ref: DynamicDialogRef | undefined;
  newAddress: string= '';


constructor(private http : HttpClient, public dialogService: DialogService){}


ngOnInit(): void {
    this.http.get<string[]>(this.addressesUrl).subscribe(
      (data: string[]) => {
      this.allAddresses = data;
      this.chosenAddress = this.allAddresses[0];
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
     );
}

changeAddress(){
  this.loading = true;
  setTimeout(() => {
    this.loading = false;
  }, 1200); 
  this.editAddressMode = true;
}
assignAddress(){
  this.editAddressMode = false;
}

addAddress(){
  this.ref = this.dialogService.open(AddAddressComponent, {
    width: '30%',
    contentStyle: { 'max-height': '500px', overflow: 'auto' },
    breakpoints: {
      '960px': '75vw',
      '640px': '90vw',
    },
    data: {
      name: 'ادخل البيانات التالية',
      imagePath: './assets/images/popup-info.svg',
      background: 'bg-neutral',
    },
  });

  this.ref.onClose.subscribe((data: { address: string; checked: boolean }) => {
    if (data) {
      this.newAddress = data.address;
      this.allAddresses.push(this.newAddress);
      if(data.checked){
        this.chosenAddress = this.allAddresses[this.allAddresses.length-1]
      }
    }
  });
}

}
