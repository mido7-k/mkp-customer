import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { StepsModule } from 'primeng/steps';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProcessStepsComponent } from './components/process-steps/process-steps.component';
import { TableComponent } from '../../shared/table/table.component';
import { ReadOnlyComponent } from "../../shared/read-only/read-only.component";
@NgModule({
  declarations: [
    OrdersListComponent,
    OrderDetailsComponent,
    ProcessStepsComponent,
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TranslateModule,
    InputTextModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    TableComponent,
    DropdownModule,
    TagModule,
    ReadOnlyComponent,
    StepsModule,
    ButtonModule,
    ProgressBarModule
  ],
})
export class OrdersModule {}
