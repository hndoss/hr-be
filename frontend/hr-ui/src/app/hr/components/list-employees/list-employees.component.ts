import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { UserProfile } from 'src/app/core/models/userprofile/userprofile';
import { User } from 'src/app/core/models/user/user';

@Component({
  selector: 'hr-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  title = "Employees"
  subtitle = "username"
  employees: UserProfile[];
  properties = [
    { "name": "Id", "value": "id" },
    { "name": "Username", "value": "username" }
  ]

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  private getEmployees() {
    this.employees = [];
    this.employeeService.getEmployees()
      .subscribe((employees: UserProfile[]) => {
        this.employees = employees;
      });
  }

  private showDetailsOfEmployee(entity) {
    console.log("Updating " + entity + " and triggering modal ");
    this.router.navigate([`${this.router.url}/${entity.id}`]);
  }
  
}