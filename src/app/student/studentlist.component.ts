import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { IStudent } from './students.interface';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students:IStudent[];
  constructor(private studentService:StudentService) { }

  ngOnInit() {
    if(!this.studentService.getData()){
    this.studentService.getStudents().subscribe(data=>{this.students=data;
    this.studentService.setStudents(this.students);
  });
}else{
    this.students = this.studentService.getData();
  }
  }

  onClick(id:number){
   this.studentService.deleteStudent(id);
   this.students=this.studentService.getData();
  }
}
