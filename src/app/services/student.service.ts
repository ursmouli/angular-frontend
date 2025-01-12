import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { StudentListReponse } from '../dto/student-list-reponse';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  http = inject(HttpClient);
  api = 'http://localhost:8005/api/student';

  constructor() { }

  addStudent(student: any) {
    // Add student to the database
  }

  getStudents(page: number, pageSize: number): Promise<StudentListReponse> {
    const body = {
      "page": page,
      "size": pageSize
    };
    return lastValueFrom(this.http.post<StudentListReponse>(`${this.api}/all`, body));
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
