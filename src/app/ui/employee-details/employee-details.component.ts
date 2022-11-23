import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, map, switchMap } from "rxjs";
import { EmployeeDetailsParamsModel, EmployeeModel } from "../../model/employee.model";
import { EmployeeService } from "../../services/employee/employee.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _employeeService: EmployeeService,
  ) {}

  params$: Observable<EmployeeDetailsParamsModel> = this._activatedRoute.params.pipe(
    map(params => ({
      id: params['id'],
    }))
  );

  details$: Observable<EmployeeModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._employeeService.getOne(data['id']))
  );
}
