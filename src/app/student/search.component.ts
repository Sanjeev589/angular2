import { Component, OnInit } from '@angular/core';
import { IStudent } from './students.interface';
import { StudentService } from './student.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  students:IStudent[];
  constructor(private studentService:StudentService) { }

  ngOnInit() {
  }

searchStudent(data){
  console.log(data);
  console.log(data.name);
  this.students = this.studentService.getData().filter(s=>s.name===data.name);

}
}
