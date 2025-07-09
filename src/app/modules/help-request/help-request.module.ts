import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HelpRequestRoutingModule } from './help-request-routing.module';
import { HelpRequestComponent } from './help-request.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TableComponent } from '../../shared/table/table.component';
import { ReadOnlyComponent } from '../../shared/read-only/read-only.component';


@NgModule({
  declarations: [
    HelpRequestComponent,
    TicketDetailsComponent,
    TicketListComponent,
  ],
  imports: [
    CommonModule,
    HelpRequestRoutingModule,
    TranslateModule,
    InputTextModule,
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    FloatLabelModule,
    DropdownModule,
    InputTextareaModule,
    TableComponent,
    ReadOnlyComponent
  ],
})
export class HelpRequestModule {}
