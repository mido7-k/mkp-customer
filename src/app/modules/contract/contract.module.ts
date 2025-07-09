import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { ContractDetailsComponent } from './components/contract-details/contract-details.component';
import { PurposesComponent } from './components/purposes/purposes.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { TableComponent } from "../../shared/table/table.component";
import { ReadOnlyComponent } from "../../shared/read-only/read-only.component";
import { CarouselModule } from 'primeng/carousel';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";


@NgModule({
  declarations: [ContractComponent, ContractDetailsComponent, PurposesComponent],
  imports: [
    CommonModule,
    ContractRoutingModule,
    TranslateModule,
    InputTextModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    TableComponent,
    ReadOnlyComponent,
    CarouselModule,
    ProductCardComponent
]
})
export class ContractModule { }
