import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/model/student-const/student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  @Input() data!: Student;
  @Output() sendDeleteEvent: EventEmitter<string> = new EventEmitter();

   ngOnInit(): void {}

  deleteStudent() {
    this.sendDeleteEvent.emit(this.data.id);
  }


}
