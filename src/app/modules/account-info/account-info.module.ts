import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountInfoRoutingModule } from './account-info-routing.module';
import { AccountInfoComponent } from './account-info.component';
import { VerifyDataComponent } from './components/verify-data/verify-data.component';
import { RequestsChartComponent } from './components/requests-chart/requests-chart.component';
import { ReadOnlyComponent } from '../../shared/read-only/read-only.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { TableComponent } from '../../shared/table/table.component';
import { TranslateModule } from '@ngx-translate/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from "primeng/floatlabel"
import { TooltipModule } from 'primeng/tooltip';
import { UpdateDataComponent } from './components/update-data/update-data.component';

@NgModule({
  declarations: [
    AccountInfoComponent,
    InfoCardComponent,
    VerifyDataComponent,
    RequestsChartComponent,
    RequestsChartComponent,
    UpdateDataComponent,
  ],
  imports: [
    CommonModule,
    AccountInfoRoutingModule,
    ReadOnlyComponent,
    TableComponent,
    TranslateModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    TooltipModule,
  ],
})
export class AccountInfoModule {}
