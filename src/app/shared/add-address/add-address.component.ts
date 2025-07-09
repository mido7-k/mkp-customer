import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-address',
  standalone: true,
  imports: [
    TranslateModule,
    InputTextModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    CheckboxModule,
  ],
  templateUrl: './add-address.component.html',
  styleUrl: './add-address.component.scss',
})
export class AddAddressComponent implements OnInit {
  fullname: string = '';
  district: string = '';
  city: string = '';
  street: string = '';
  unit: string = '';
  building: string = '';
  postalCode: string = '';
  primaryAddress: boolean = false;
  newAddress: string = '';
  checked: boolean = false;
  imagePath: string = '';
  status: string = '';
  receivedAddress: string = '';

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {}

  ngOnInit(): void {
    this.imagePath = this.config.data.imagePath;
    this.status = this.config.data.background;
    this.receivedAddress = this.config.data.address;
    if (this.receivedAddress) {
      this.populateAddressFields(this.receivedAddress);
    }
  }

  populateAddressFields(address: string) {
    console.log('Received address:', address);

    const parts = address.split(' - ');

    if (parts.length >= 3) {
      const locationParts = parts[0].split('،');
      if (locationParts.length >= 3) {
        this.city = locationParts[0].trim();
        this.district = locationParts[1].trim();
        this.street = locationParts[2].trim(); 
      }

      if (parts[1].includes('المبنى')) {
        this.building = parts[1].replace('المبنى', '').trim();
      }

      if (parts[2].includes('رقم الوحدة')) {
        this.unit = parts[2].replace('رقم الوحدة', '').trim();
      }
    }

  }

  saveAddress() {
    if (!this.district && !this.street && !this.fullname) {
      return;
    }
    this.newAddress = `${this.district}, ${this.street}`;

    if (this.postalCode) {
      this.newAddress += ` - ${this.postalCode}`;
    }

    if (this.building) {
      this.newAddress += ` - المبنى ${this.building}`;
    }

    if (this.unit) {
      this.newAddress += ` - رقم الوحدة ${this.unit}`;
    }
    this.newAddress += `- ${this.city}- المملكة العربية السعودية`;
    console.log(this.checked);
if(this.receivedAddress){

  this.ref.close({ address: this.newAddress, checked: this.checked, editAddress: true });
}else{
  this.ref.close({
    address: this.newAddress,
    checked: this.checked,
    editAddress: false,
  });

}

  }

  close() {
    this.ref.close();
  }
}
