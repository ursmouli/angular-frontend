import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { last } from 'rxjs';
import { MatNativeDateModule } from '@angular/material/core';
import { UserRegistration } from '../../../dto/user-registration';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-registration',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent {
  userRegistrationForm: FormGroup;



  constructor(private fb: FormBuilder, 
    private userService: UserService, 
    private authService: AuthService,
    private router: Router
  ) {
    this.userRegistrationForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      dateOfBirth: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.userRegistrationForm.value);

    const formValue = this.userRegistrationForm.value;

    const userReg: UserRegistration = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      email: formValue.email,
      password: formValue.password,
      dateOfBirth: formValue.dateOfBirth,
    };

    this.authService.signup(userReg).subscribe((response) => {
      this.router.navigate(['/login']);
    });
  }
}
