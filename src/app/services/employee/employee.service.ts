import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EmployeeModel, NewEmployeeModel } from "../../model/employee.model";
import { Observable } from "rxjs";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeModel[]>('/assets/data/people.json');
  }

  createNewEmployee(employeeData: NewEmployeeModel, config?: any): Observable<any> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employeeData, config);
  }
}
