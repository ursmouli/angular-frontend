import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggleModule, HeaderComponent, FooterComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  title = 'angular-frontend';
  isHideHeaderFooter: boolean = false;

  hiddenToolbarRoutes = ['/login', '/userregistration', '/studentregistration'];

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHideHeaderFooter = false;
      this.hiddenToolbarRoutes.forEach(route => {
        if (this.router.url.includes(route)) {
          this.isHideHeaderFooter = true;
        }
      });
      // this.isHideHeaderFooter = this.hiddenToolbarRoutes.includes(this.router.url)
    });
  }
}
