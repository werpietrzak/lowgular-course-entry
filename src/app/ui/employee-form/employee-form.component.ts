import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

interface EmployeeFormValues {
  name: string;
  age: number;
  salary: number;
}

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent {
  readonly employeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(0)]),
    salary: new FormControl(null, [Validators.required, Validators.min(0)]),
  });
  onSubmit(values: EmployeeFormValues) {
    alert(`User was successfully added to the database. Name: ${values.name}, age: ${values.age}, salary: ${values.salary}`);
  }
}
