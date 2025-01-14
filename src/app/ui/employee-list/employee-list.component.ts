import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import { EmployeeService } from "../../services/employee/employee.service";

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {}

  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();

  deleteEmployee(id: string) {
    this._employeeService.deleteEmployee(id, {observe: 'response'}).subscribe(response => {
      if (response.status === 200) {
        alert('User was successfully removed');
      }
    });
  }
}
