import { Component } from '@angular/core';
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
    MatCheckboxModule,
    MatSelectModule,
    MatAutocompleteModule,
  ],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.scss'
})
export class StudentRegistrationComponent {

  registrationForm!: FormGroup;
  permanentAddress!: FormGroup;
  residentialAddress!: FormGroup;

  relationships = [
    { "key": "father", "value": "Father" },
    { "key": "mother", "value": "Mother" },
    { "key": "brother", "value": "Brother" },
    { "key": "sister", "value": "Sister" },
    { "key": "son", "value": "Son" },
    { "key": "daughter", "value": "Daughter" },
    { "key": "husband", "value": "Husband" },
    { "key": "wife", "value": "Wife" },
    { "key": "grandfather", "value": "Grandfather" },
    { "key": "grandmother", "value": "Grandmother" },
    { "key": "grandson", "value": "Grandson" },
    { "key": "granddaughter", "value": "Granddaughter" },
    { "key": "uncle", "value": "Uncle" },
    { "key": "aunt", "value": "Aunt" },
    { "key": "nephew", "value": "Nephew" },
    { "key": "niece", "value": "Niece" },
    { "key": "cousin", "value": "Cousin" },
    { "key": "father_in_law", "value": "Father-in-law" },
    { "key": "mother_in_law", "value": "Mother-in-law" },
    { "key": "brother_in_law", "value": "Brother-in-law" },
    { "key": "sister_in_law", "value": "Sister-in-law" },
    { "key": "son_in_law", "value": "Son-in-law" },
    { "key": "daughter_in_law", "value": "Daughter-in-law" },
    { "key": "friend", "value": "Friend" },
    { "key": "colleague", "value": "Colleague" },
    { "key": "neighbor", "value": "Neighbor" },
    { "key": "mentor", "value": "Mentor" },
    { "key": "guardian", "value": "Guardian" },
    { "key": "stepfather", "value": "Stepfather" },
    { "key": "stepmother", "value": "Stepmother" },
    { "key": "stepbrother", "value": "Stepbrother" },
    { "key": "stepsister", "value": "Stepsister" },
    { "key": "stepson", "value": "Stepson" },
    { "key": "stepdaughter", "value": "Stepdaughter" },
    { "key": "foster_parent", "value": "Foster parent" },
    { "key": "foster_child", "value": "Foster child" }
  ];
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
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
          email: ['', Validators.required],
          relation: ['', Validators.required],
          primaryContact: [false]
        })
      ]),
      siblings: this.fb.array([]),

    });

    this.permanentAddress = this.registrationForm.get('pAddress') as FormGroup;
    this.residentialAddress = this.registrationForm.get('rAddress') as FormGroup;
  }

  get siblings() {
    return this.registrationForm.get('siblings') as FormArray;
  }

  get guardians() {
    return this.registrationForm.get('guardians') as FormArray;
  }

  addGuardian() {
    this.guardians.push(this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
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

}
