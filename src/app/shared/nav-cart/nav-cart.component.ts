import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-cart',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './nav-cart.component.html',
  styleUrl: './nav-cart.component.scss',
})
export class NavCartComponent {
  showCart: boolean = false;
  showCompleteInfo: boolean = true;
  verified: boolean = true;

  @ViewChild('userCart') userProfile?: ElementRef;

  toggleCart() {
    this.showCart = !this.showCart;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (
      this.userProfile &&
      !this.userProfile.nativeElement.contains(event.target)
    ) {
      this.showCart = false;
    }
  }
}
