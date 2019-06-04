import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { Employee } from 'src/app/core/models/userprofile/employee';

@Component({
  selector: 'hr-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  title = "Employees"
  subtitle = "employee name"
  employees: any = [];
  properties= [
    { "name": "Id" , "value": "id" }
  ]
  

  constructor(
    private employeeService: EmployeeService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  private getEmployees(){
    this.employees = [];
    this.employeeService.getEmployees()
      .subscribe((data: {}) => {
              this.employees = data;
              console.log(this.employees)
      });
  }
}