import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/core/models/employee/employee';

@Component({
  selector: 'hr-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  title = "Employees"
  employees: Employee[];

  constructor(public employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.getEmployees();
  }

  // private getEmployees(){
  //   this.employees = [];
  //   this.employeeService.getEmployees()
  //     .subscribe((data: {}) => {
  //             this.employees = data;
  //     });
  // }
}