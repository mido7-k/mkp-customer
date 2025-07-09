import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpRequestComponent } from './help-request.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './components/ticket-details/ticket-details.component';

const routes: Routes = [
  { path: '', component: HelpRequestComponent },
  { path: 'tickets-list', component: TicketListComponent } ,
  { path: 'ticket-details/:id', component: TicketDetailsComponent } 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRequestRoutingModule { }
