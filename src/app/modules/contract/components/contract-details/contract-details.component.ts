import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '../../../../core/services/breadcrumb.service';

@Component({
  selector: 'app-contract-details',
  templateUrl: './contract-details.component.html',
  styleUrl: './contract-details.component.scss'
})
export class ContractDetailsComponent implements OnInit{
  contractId!: string;

  loan ={
    typeLabel: "نوع القرض",
    typeValue: "قروض تنموية",
    projectLabel:"نوع المشروع",
    projectValue:"إنتاج البن",
    groupLabel:"فئة",
    groupValue:"فرد",
    nameLabel:"إسم الفرد",
    nameValue:'محمد الدوسري',
    dateLabel:"تاريخ العقد",
    dateValue:" 28/12/2024",
    purposesLabel:"عدد الغايات",
    purpoesValue:"5",
    priceLabel:"قيمة العقد",
    priceValue:"375,000 SAR",
    restLabel:"قيمة المبلغ المتبقي",
    restValue:"315,000 SAR",
    statusLabel:"حالة العقد",
    statusValue:"قيد التنفيذ"
  }

  constructor(private route: ActivatedRoute, private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {

    this.breadcrumbService.setBreadcrumb([
      { routeNameEn: 'Contracts list', routeNameAr: 'قائمة العقود', routerLink: '/contracts' },
      { routeNameEn: 'Contract details', routeNameAr: 'تفاصيل العقد' },

    ]);
    
    this.route.params.subscribe(params => {
      this.contractId = params['id'];
      console.log('Contract ID:', this.contractId);
    });
  }
}