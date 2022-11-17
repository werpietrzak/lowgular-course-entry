import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import { EmployeePhotosComponentModule } from "./ui/employee-photos/employee-photos.component-module";
import { EmployeeServiceModule } from "./services/employee/employee.service-module";
import { ProjectListComponentModule } from "./ui/project-list/project-list.component-module";
import { ProjectServiceModule } from "./services/project/project.service-module";
import { EmployeeFormComponentModule } from "./ui/employee-form/employee-form.component-module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    EmployeePhotosComponentModule,
    EmployeeServiceModule,
    ProjectListComponentModule,
    ProjectServiceModule,
    EmployeeFormComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
