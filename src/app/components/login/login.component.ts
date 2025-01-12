import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginResponse } from '../../dto/login-response';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe({
        next: (data: LoginResponse) => {
          console.log('Response: ', data);
          this.authService.storeToken(data.token);

          const returnUrl = this.router.routerState.snapshot.root.queryParams['returnUrl'] || '/welcome';
          this.router.navigate([returnUrl]);
        },
        error: (error) => {
          console.error('Error: ', error);
          this.errorMessage = 'Invalid email or password';
        }
      });
    }
  }

  onReset() {
    this.loginForm.reset();
  }
}
