import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'employee-photos',
  templateUrl: './employee-photos.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeePhotosComponent {
  constructor(private _client: HttpClient) {}
  data$: Observable<EmployeeModel[] | null> = this._client.get<EmployeeModel[]>('/assets/data/employees.json');
}
