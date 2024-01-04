import { Injectable } from '@angular/core';
import { Student } from '../model/student-const/student';
import { STUDENTS } from '../model/student-const/studentConst';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  students = STUDENTS;

  constructor() { }


  getStudents(): Student[] {
    return this.students;
  }

  // addStudent(student: Student) {
  //   this.students.push(student);
  // }

  deleteStudent(studentId: string) {
    this.students = this.students.filter((std: Student) => std.id !== studentId);
}

}