import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

// import {StyleClassModule} from 'primeng/styleclass';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { BreadcrumbComponent } from "./shared/breadcrumb/breadcrumb.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    NavbarComponent,
    FooterComponent,
    BreadcrumbComponent,
    CommonModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'marketplace';
  showBreadcrumb: boolean = true;
 

  constructor( public translate: TranslateService, private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showBreadcrumb = !['/login', '/home', '/account-info'].includes(event.url);
      }
    });
  }
  

  // private setDirection(lang: string) {
  //   const htmlElement = document.documentElement;

  //   if (lang === 'ar') {
  //     htmlElement.setAttribute('dir', 'rtl');
  //     htmlElement.setAttribute('lang', 'ar');

  //   } else {
  //     htmlElement.setAttribute('dir', 'ltr');
  //     htmlElement.setAttribute('lang', 'en');
  //   }
  // }
  
}