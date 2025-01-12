import { Component, inject, OnInit, ViewChild } from '@angular/core';

import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StudentService } from '../../services/student.service';
import { Student } from '../../dto/student';

@Component({
  selector: 'app-student-list',
  imports: [MatTableModule, MatIconModule, MatButtonModule, MatSortModule, MatPaginatorModule, MatCardModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.scss'
})
export class StudentListComponent {
  studentService = inject(StudentService);

  displayedColumns: string[] = ['id', 'name', 'age', 'actions'];
  dataSource!: MatTableDataSource<Student>;

  totalElements: number = 0;
  pageSize: number = 5;

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit() {
    this.paginator.page.subscribe(() => this.laodStudents());
    this.laodStudents();
  }

  ngAfterViewInit() {
  }

  laodStudents() {
    const iPageIndex = this.paginator.pageIndex;
    const iPageSize = this.paginator.pageSize ? this.paginator.pageSize : this.pageSize;

    console.log('pageSize and pageIndex', iPageSize, iPageIndex);

    this.studentService.getStudents(iPageIndex, iPageSize).then((response) => {
      console.log('Students: ', response);
      const students: Student[] = response.content;
      this.dataSource = new MatTableDataSource<Student>(students);

      this.totalElements = response.totalElements;
      this.pageSize = response.size;
    }).catch((error) => { console.error(error) });
  }

  editStudent(id: number) {
    console.log('Edit student with id: ', id);
  }

  deleteStudent(id: number) {
    console.log('Delete student with id: ', id);
  }

  setSortPagination() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
