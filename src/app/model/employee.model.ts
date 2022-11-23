export interface EmployeeModel {
  personalNumber: string;
  name: string;
  mail: string;
  img: string;
}

export interface NewEmployeeModel {
  name: string;
  age: number;
  salary: number;
}

export interface EmployeeApiModel {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

export interface EmployeeDetailsParamsModel {
  id: string;
  name: string;
}
