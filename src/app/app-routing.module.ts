import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentlistComponent } from './student/studentlist.component';
import { AddstudentComponent } from './student/addstudent.component';
import { StartPageComponent } from './student/start-page.component';
import { SearchComponent } from './student/search.component';


const routes: Routes = [
  {path:"students",component:StudentlistComponent},
  {path:"add",component:AddstudentComponent},
  {path:"search", component:SearchComponent},
  {path:'',component:StartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
