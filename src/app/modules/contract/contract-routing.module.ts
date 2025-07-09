import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractComponent } from './contract.component';
import { ContractDetailsComponent } from './components/contract-details/contract-details.component';

const routes: Routes = [
  { path: '', component: ContractComponent },
  { path: 'details/:id', component: ContractDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
