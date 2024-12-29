import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-welcome',
  imports: [CommonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  authService = inject(AuthService);

  constructor() {
    console.log('WelcomeComponent created');
  }


}
