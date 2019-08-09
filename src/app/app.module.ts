import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' ;
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentlistComponent } from './student/studentlist.component';
import { AddstudentComponent } from './student/addstudent.component';
import { StartPageComponent } from './student/start-page.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './student/search.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    AddstudentComponent,
    StartPageComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
