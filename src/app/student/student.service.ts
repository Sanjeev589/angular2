import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './students.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:IStudent[];
  constructor(private http:HttpClient) {
    this.http.get<IStudent[]>("../../assets/student.json").subscribe(data=>{this.students=data;console.log(data)})
   }

  getStudents():Observable<IStudent[]>{
    return this.http.get<IStudent[]>("../../assets/student.json");
  }
  getData(){
    return this.students;
  }
  addStudent(student:IStudent){
    console.log(this.students);
    this.students.push(student);
  }
  setStudents(students:IStudent[]){
    this.students=students;
  }
  deleteStudent(id:number){
    this.students=this.students.filter(e=>e.id!=id);
  }
}
