import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EmployeeService } from "../../services/employee/employee.service";
import { NewEmployeeModel } from "../../model/employee.model";

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent {
  constructor(private _employeeService: EmployeeService) {}

  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(0)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)]),
  });

  onSubmit(values: NewEmployeeModel) {
    this._employeeService.createNewEmployee(values, {observe: 'response'}).subscribe(
      response => {
        if (response.status === 200) {
          alert(
            `User was successfully added to the database.
            Name: ${values.name},
            age: ${values.age},
            salary: ${values.salary}`
          );
        }
      }
    );
  }
}
