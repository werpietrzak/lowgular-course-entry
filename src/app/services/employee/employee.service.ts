import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EmployeeApiModel, EmployeeModel, NewEmployeeModel } from "../../model/employee.model";
import { map, Observable } from "rxjs";
import { ApiResponse } from "../api.response";

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeApiModel[]>>('https://dummy.restapiexample.com/api/v1/employees')
      .pipe(map((response: ApiResponse<EmployeeApiModel[]>) => {
        return response.data.map((employee: EmployeeApiModel): EmployeeModel => {
          return {
            personalNumber: String(employee.id),
            name: employee.employee_name,
            mail: `${employee.employee_name.toLowerCase().replace(" ", "")}@lowgular.io`,
            img: employee.profile_image,
          }
        })
      }));
  }

  createNewEmployee(employeeData: NewEmployeeModel, config?: any): Observable<any> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employeeData, config);
  }

  deleteEmployee(id: string, config?: any): Observable<any> {
    return this._httpClient.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`, config);
  }
}
