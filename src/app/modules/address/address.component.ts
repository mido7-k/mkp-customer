import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../core/services/breadcrumb.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HttpClient } from '@angular/common/http';
import { AddAddressComponent } from '../../shared/add-address/add-address.component';
import { DynamicPopupComponent } from '../../shared/dynamic-popup/dynamic-popup.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss',
  providers: [DialogService],
})
export class AddressComponent implements OnInit {
  loading: boolean = false;
  editAddressMode: boolean = false;
  allAddresses: string[] = [];
  private addressesUrl = './assets/address.json';
  chosenAddress: string =
    'حي العقيق، شارع الأطلال- المبنى 7454 - رقم الوحدة ,19827  - الرياض, المملكة العربية السعودية  - 0572651405 (966)';
  chosenIndex: number = 0;
  ref: DynamicDialogRef | undefined;
  newAddress: string = '';

  constructor(
    private breadcrumbService: BreadcrumbService,
    private http: HttpClient,
    public dialogService: DialogService
  ) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb([
      {
        routeNameEn: 'Addresses management',
        routeNameAr: 'إدارة العناوين',
        routerLink: '/address',
      },
    ]);

    this.http.get<string[]>(this.addressesUrl).subscribe(
      (data: string[]) => {
        this.allAddresses = data;
        this.allAddresses = this.allAddresses.map((address) =>
          this.removeSecondToLastPart(address)
        );
        this.chosenAddress = this.allAddresses[0];
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  addAddress(event?: MouseEvent, index?: number) {
    let Addressindex = 0;
    let isEditMode = false;

    if (event && index !== undefined) {
      event.stopPropagation();
      Addressindex = index;
      isEditMode = true;
    }

    this.ref = this.dialogService.open(AddAddressComponent, {
      width: '30%',
      contentStyle: { 'max-height': '500px', overflow: 'auto' },
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
      data: {
        imagePath: './assets/images/popup-info.svg',
        background: 'bg-neutral',
        address: isEditMode ? this.allAddresses[Addressindex] : '',
        editAddress: isEditMode,
      },
    });

    this.ref.onClose.subscribe(
      (data: { address: string; checked: boolean; editAddress: boolean }) => {
        if (data) {
          this.newAddress = data.address;
          const newAddedAddress = this.removeSecondToLastPart(this.newAddress);

          if (!data.editAddress) {
            // Add new address if it's not in edit mode
            this.allAddresses.push(newAddedAddress);
            if (data.checked) {
              this.chosenIndex = this.allAddresses.length - 1;
            }
          } else {
            // Update address if it's in edit mode
            this.allAddresses[Addressindex] = newAddedAddress;
          }
        }
      }
    );
  }

  removeSecondToLastPart(address: string): string {
    const lastIndex = address.lastIndexOf(' - ');
    if (lastIndex !== -1) {
      const secondLastIndex = address.lastIndexOf(' - ', lastIndex - 1);
      if (secondLastIndex !== -1) {
        return address.substring(0, secondLastIndex);
      }
    }
    return address;
  }

  assignPrimary(index: number) {
    this.chosenIndex = index;
  }

  deleteAddress(event: MouseEvent, index: number) {
    event.stopPropagation();

        this.ref = this.dialogService.open(DynamicPopupComponent, {
          width: '25%',
          contentStyle: { 'max-height': '500px', overflow: 'auto' },
          breakpoints: {
            '1200px': '40vw',
            '960px': '75vw',
            '640px': '90vw'
          },
          data: {
            title: "orders.confirmCancel",
            subTitle: "orders.subConfirm",
            btnTitle: "orders.confirm",
            imagePath: './assets/images/popup-exclamation.svg',
            background: 'bg-error'
          }
        });

        this.ref.onClose.subscribe((proceed: boolean) => {
          if (proceed) {
            this.allAddresses.splice(index, 1);
            if (this.chosenIndex === index) {
              this.chosenIndex = 0;
            }else if (this.chosenIndex > this.allAddresses.length-1) {
              this.chosenIndex = this.chosenIndex - 1;
            }
          }
        });
  }

  editAddress(event: MouseEvent, index: number) {
    event.stopPropagation();
    this.allAddresses.splice(index, 1);

    if (this.chosenIndex === index) {
      this.chosenIndex = 0;
    }
  }
}
