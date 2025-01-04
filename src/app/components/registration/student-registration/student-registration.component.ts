import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddressComponent } from "../../address/address.component";
import { count } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule} from '@angular/material/checkbox';
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
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule
  ],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.scss'
})
export class StudentRegistrationComponent {

  registrationForm!: FormGroup;
  permanentAddress!: FormGroup;
  residentialAddress!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      pAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required],
        country: ['', Validators.required]
      }),
      rAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required],
        country: ['', Validators.required]
      }),
      sameAsPermanentAddress: [false],
      siblings: this.fb.array([])
    });

    this.permanentAddress = this.registrationForm.get('pAddress') as FormGroup;
    this.residentialAddress = this.registrationForm.get('rAddress') as FormGroup;
  }

  get siblings() {
    return this.registrationForm.get('siblings') as FormArray;
  }

  addSibling() {
    this.siblings.push(this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required]
    }));
  }

  removeSibling(index: number) {
    this.siblings.removeAt(index);
  }

  isValidForm(): boolean {
    return this.registrationForm.valid;
  }

  onSubmit() {
    throw new Error('Method not implemented.');
  }

}
