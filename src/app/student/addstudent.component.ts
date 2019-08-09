import { Component, OnInit } from '@angular/core';
import { IStudent } from './students.interface';
import { StudentService } from './student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }
  addStudent(student:IStudent){
    console.log(student);
    this.studentService.addStudent(student);
  }

}
