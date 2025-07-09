import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeProductsRoutingModule } from './home-products-routing.module';
import { HomeProductsComponent } from './home-products.component';
import { BestSellerComponent } from './components/best-seller/best-seller.component';
import { FilteredProductsComponent } from './components/filtered-products/filtered-products.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { CarouselComponent } from '../../shared/carousel/carousel.component';

@NgModule({
  declarations: [HomeProductsComponent, BestSellerComponent, FilteredProductsComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomeProductsRoutingModule,
    ButtonModule,
    TranslateModule,
    GalleriaModule,
    FormsModule,
    CarouselComponent
  ]
})
export class HomeProductsModule { }
