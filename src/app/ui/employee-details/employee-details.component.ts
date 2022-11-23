import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable, map } from "rxjs";
import { EmployeeDetailsParamsModel } from "../../model/employee.model";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {
  constructor(private _activatedRoute: ActivatedRoute) {}

  params$: Observable<EmployeeDetailsParamsModel> = this._activatedRoute.params.pipe(
    map(params => ({
      id: params['id'],
      name: params['name'],
    }))
  );
}
