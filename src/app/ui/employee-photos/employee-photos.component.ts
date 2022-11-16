import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import { EmployeeService } from "../../services/employee/employee.service";

@Component({
  selector: 'employee-photos',
  templateUrl: './employee-photos.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeePhotosComponent {
  constructor(private _employeeService: EmployeeService) {}
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();
}
