import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '../../core/services/breadcrumb.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActionButton } from '../../core/models/action-btn';
import { TableItem } from '../../core/models/orders';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.scss'
})
export class ContractComponent implements OnInit{

companyActive: boolean = false
searchValue: string = '';
contractsNumber: number = 24;
contractsList: TableItem[] = [];
actionButtons: ActionButton[] = [
  {
    title: "viewDetails",
    icon: '',
    imgPath: "./assets/images/eye.svg",
    class: 'view-details',
    func: (id: string) => this.viewDetails(id),
  }
]
private contractsUrl = './assets/contracts-list.json';

  constructor(
    private breadcrumbService: BreadcrumbService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.breadcrumbService.setBreadcrumb([
      { routeNameEn: 'Contracts list', routeNameAr: 'قائمة العقود', routerLink: '/contracts' },
    ]);

    this.http.get<TableItem[]>(this.contractsUrl).subscribe(
      (data: TableItem[]) => {
      this.contractsList = data
      this.contractsNumber = this.contractsList.length
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
     );
  }

  viewDetails(id: string) {
    console.log(id);
    
    this.router.navigate(['/contracts/details', id]);
  } 
}