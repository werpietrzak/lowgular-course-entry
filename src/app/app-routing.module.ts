import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from "./ui/employee-list/employee-list.component";
import { EmployeeServiceModule } from "./services/employee/employee.service-module";
import { EmployeeListComponentModule } from "./ui/employee-list/employee-list.component-module";
import { EmployeeFormComponent } from "./ui/employee-form/employee-form.component";
import { EmployeeFormComponentModule } from "./ui/employee-form/employee-form.component-module";
import { HomeComponent } from "./ui/home/home.component";
import { HomeComponentModule } from "./ui/home/home.component-module";
import { EmployeeDetailsComponent } from "./ui/employee-details/employee-details.component";
import { EmployeeDetailsComponentModule } from "./ui/employee-details/employee-details.component-module";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent,
  },
  {
    path: 'create-employee',
    component: EmployeeFormComponent,
  },
  {
    path: 'employee-details/:id',
    component: EmployeeDetailsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeComponentModule,
    EmployeeListComponentModule,
    EmployeeFormComponentModule,
    EmployeeDetailsComponentModule,
    EmployeeServiceModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
