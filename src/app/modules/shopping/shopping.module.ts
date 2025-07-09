import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingComponent } from './shopping.component';
import { ProductWithPaginationComponent } from "../../shared/product-with-pagination/product-with-pagination.component";
import { FiltersComponent } from './components/filters/filters.component';
import { TranslateModule } from '@ngx-translate/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

@NgModule({
  declarations: [ShoppingComponent, FiltersComponent],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    ProductWithPaginationComponent,
    TranslateModule,
    InputTextModule,
    InputIconModule,
    IconFieldModule,
    FormsModule,
    SliderModule
],
})
export class ShoppingModule { }
