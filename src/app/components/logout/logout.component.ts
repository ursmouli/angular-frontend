import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  private authServices = inject(AuthService);
  private router = inject(Router);

  constructor() {
  }

  yes() {
    this.authServices.logout();
    this.router.navigate(['/login']);
  }

  no() {
    this.router.navigate(['/welcome']);
  }
}
