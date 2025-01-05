import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddressComponent } from "../../address/address.component";
import { count, map, Observable, startWith } from 'rxjs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonService } from '../../../services/common.service';

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
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.scss'
})
export class StudentRegistrationComponent {

  registrationForm!: FormGroup;
  permanentAddress!: FormGroup;
  residentialAddress!: FormGroup;

  commonService = inject(CommonService);

  // Store the initial state of the form
  initialFormValues: any;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      pAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        district: ['', Validators.required],
        state: ['', Validators.required],
        postalcode: ['', Validators.required],
        country: ['', Validators.required]
      }),
      rAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        district: ['', Validators.required],
        state: ['', Validators.required],
        postalcode: ['', Validators.required],
        country: ['', Validators.required]
      }),
      sameAsPermanentAddress: [false],
      guardians: this.fb.array([
        this.fb.group({
          name: ['', Validators.required],
          phone: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          relation: ['', Validators.required],
          primaryContact: [false]
        })
      ]),
      siblings: this.fb.array([]),

    });

    this.permanentAddress = this.registrationForm.get('pAddress') as FormGroup;
    this.residentialAddress = this.registrationForm.get('rAddress') as FormGroup;

    // Save the initial state of the form
    this.initialFormValues = this.registrationForm.getRawValue();
  }

  get siblings() {
    return this.registrationForm.get('siblings') as FormArray;
  }

  get guardians() {
    return this.registrationForm.get('guardians') as FormArray;
  }

  onSameAsPermanentAddrChange() {
    if (this.registrationForm.get('sameAsPermanentAddress')!.value) {
      this.registrationForm.get('rAddress')!.disable();
    } else {
      this.registrationForm.get('rAddress')!.enable();
    }
  }

  addGuardian() {
    this.guardians.push(this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      relation: ['', Validators.required],
      primaryContact: [false]
    }));
  }

  removeGuardian(index: number) {
    this.guardians.removeAt(index);
  }

  addSibling() {
    this.siblings.push(this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      isStudying: [false],
      schoolName: ['', Validators.required]
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

  clearForm() {
    this.registrationForm.reset();
  }

}
