import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductBriefComponent } from './components/product-brief/product-brief.component';
import { ProductSpecsComponent } from './components/product-specs/product-specs.component';
import { ProductRatingsComponent } from './components/product-ratings/product-ratings.component';
import { ProductGalleryComponent } from './components/product-gallery/product-gallery.component';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProductCardComponent } from "../../shared/product-card/product-card.component";
import { CarouselComponent } from '../../shared/carousel/carousel.component';

@NgModule({
  declarations: [ProductComponent, ProductBriefComponent, ProductSpecsComponent, ProductRatingsComponent, ProductGalleryComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ButtonModule,
    TranslateModule,
    GalleriaModule,
    FormsModule,
    RatingModule,
    ProgressBarModule,
    ProductCardComponent,
    CarouselComponent
]
})
export class ProductModule { }
