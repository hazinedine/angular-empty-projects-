import { Component } from '@angular/core';
import { STUDENTS } from 'src/app/model/student-const/studentConst';
import { Student } from 'src/app/model/student-const/student';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students: Student[] = STUDENTS;

  deleteStudent(stdId: string){
    this.students = this.students.filter((student) => student.id !== stdId);    
  }
 
}
