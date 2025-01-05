import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  http = inject(HttpClient);

  constructor() { }

  addStudent(student: any) {
    // Add student to the database
  }

  getStudents() {
    // Get all students from the database
  }

  getStudentById(id: number) {
    // Get student by id from the database
  }

  updateStudent(student: any) {
    // Update student in the database
  }

  deleteStudent(id: number) {
    // Delete student from the database
  }

  searchStudents(searchTerm: string) {
    // Search students in the database
  }

  getStudentByClass(classId: number) {
    // Get all students in a class from the database
  }

  getStudentBySection(sectionId: number) {
    // Get all students in a section from the database
  }

  getStudentByClassAndSection(classId: number, sectionId: number) {
    // Get all students in a class and section from the database
  }

  getStudentByRollNumber(rollNumber: string) {
    // Get student by roll number from the database
  }

  getStudentByAdmissionNumber(admissionNumber: string) {
    // Get student by admission number from the database
  }



}
