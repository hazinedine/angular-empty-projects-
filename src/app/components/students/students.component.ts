import { Component, OnInit } from '@angular/core';
import { STUDENTS } from 'src/app/model/student-const/studentConst';
import { Student } from 'src/app/model/student-const/student';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent  implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() : void {
    this.getStudents();
  }

  getStudents() {
    this.students = this.studentService.getStudents();
  }

  deleteStudent(stdId: string){
    this.studentService.deleteStudent(stdId); 
    this.getStudents();
  }
 
}
