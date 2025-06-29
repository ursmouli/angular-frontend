import { Component, EventEmitter, inject, Output, output, signal } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from '../../services/auth.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private authService = inject(AuthService);

  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() {
  }

  toggleSidenav() {
    this.sidenavToggle.emit();
  }
  
  logout() {
    this.authService.logout();
  }

  isUserLoggedIn() {
    console.log(`Logged in ${this.authService.isLoggedIn()}`);
    return this.authService.isLoggedIn();
  }
}
