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
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../dto/student';
import { Router } from '@angular/router';

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

  relationships: any;

  registrationForm!: FormGroup;
  permanentAddress!: FormGroup;
  residentialAddress!: FormGroup;

  commonService = inject(CommonService);

  studentService = inject(StudentService);

  router = inject(Router);

  // Store the initial state of the form
  initialFormValues: any;
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.getReleationships();
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      permanentAddress: this.fb.group({
        street: ['', Validators.required],
        city: ['', Validators.required],
        district: ['', Validators.required],
        state: ['', Validators.required],
        postalcode: ['', Validators.required],
        country: ['', Validators.required]
      }),
      residentialAddress: this.fb.group({
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

    this.permanentAddress = this.registrationForm.get('permanentAddress') as FormGroup;
    this.residentialAddress = this.registrationForm.get('residentialAddress') as FormGroup;

    // Save the initial state of the form
    this.initialFormValues = this.registrationForm.getRawValue();
    
  }

  get siblings() {
    return this.registrationForm.get('siblings') as FormArray;
  }

  get guardians() {
    return this.registrationForm.get('guardians') as FormArray;
  }

  async getReleationships() {
    this.relationships = await this.commonService.getRelationships();
    // console.log(this.relationships);
  }

  onSameAsPermanentAddrChange() {
    if (this.registrationForm.get('sameAsPermanentAddress')!.value) {
      this.registrationForm.get('residentialAddress')!.disable();
    } else {
      this.registrationForm.get('residentialAddress')!.enable();
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
    if (this.isValidForm()) {
      console.log(this.registrationForm.value);

      const formValues = this.registrationForm.value;

      const student: Student = {
        firstName: formValues.firstName,
        middleName: formValues.middleName,
        lastName: formValues.lastName,
        dob: formValues.dob,
        permanentAddress: formValues.permanentAddress,
        residentialAddress: formValues.residentialAddress,
        sameAsPermanentAddress: formValues.sameAsPermanentAddress,
        guardians: formValues.guardians
      }

      console.log(student);

      this.studentService.addStudent(student).then((response) => {
        console.log(response);
        this.clearForm();

        this.router.navigate(['/studentlist']);
      }, (error) => {
        console.log(error);
      });
      
    }
  }

  clearForm() {
    this.registrationForm.reset();
  }

}
