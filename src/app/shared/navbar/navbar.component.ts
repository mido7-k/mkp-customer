import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { NavCartComponent } from '../nav-cart/nav-cart.component';
import { NavFilterComponent } from "../nav-filter/nav-filter.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    ButtonModule,
    InputIconModule,
    IconFieldModule,
    FormsModule,
    MenuModule,
    NavCartComponent,
    NavFilterComponent,
    TranslateModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  showMenu: boolean = false;
  showAddressContent: boolean = false;
  userAdress: string = ' الرياض، حي العليا، شارع الملك فهد';
  showCompleteInfo: boolean = true;
  verified: boolean = true;
  @ViewChild('userProfile') userProfile?: ElementRef;
  @ViewChild('addressPanel') addressPanel?: ElementRef;
  @ViewChild('triggerAddress') triggerAddress?: ElementRef;

  constructor(public translate: TranslateService, private router: Router) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (
      this.userProfile &&
      !this.userProfile.nativeElement.contains(event.target)
    ) {
      this.showMenu = false;
    }
    const clickedOutsidePanel =
      this.addressPanel &&
      !this.addressPanel.nativeElement.contains(event.target);
    const clickedOutsideTrigger =
      this.triggerAddress &&
      !this.triggerAddress.nativeElement.contains(event.target);

    if (clickedOutsidePanel && clickedOutsideTrigger) {
      this.showAddressContent = false;
    }
  }

  switchLang() {
    const newLang = this.translate.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(newLang);
    this.setDirection(newLang);
  }

  private setDirection(lang: string) {
    const htmlElement = document.documentElement;

    if (lang === 'ar') {
      htmlElement.setAttribute('dir', 'rtl');
      htmlElement.setAttribute('lang', 'ar');
    } else {
      htmlElement.setAttribute('dir', 'ltr');
      htmlElement.setAttribute('lang', 'en');
    }
  }

  navigateHome() {
    this.router.navigate(['/home']);
  }

  navigateAddress() {
    this.router.navigate(['/address']);
    this.showAddressContent = false;
  }

  showAddress() {
    this.showAddressContent = !this.showAddressContent;
  }
}
