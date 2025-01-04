import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddressComponent } from "../../address/address.component";
import { count } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-registration',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    AddressComponent, 
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.scss'
})
export class StudentRegistrationComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  registrationForm!: FormGroup;
  addressForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required],
        country: ['', Validators.required]
      })
    });

    this.addressForm = this.registrationForm.get('address') as FormGroup;
  }

}
