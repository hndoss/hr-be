import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/core/models/userprofile/userprofile';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'manager-change-employee-salary',
  templateUrl: './change-employee-salary.component.html',
  styleUrls: ['./change-employee-salary.component.css']
})
export class ChangeEmployeeSalaryComponent implements OnInit {
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
  
    private editEmployeeSalary(entity) {
      console.log("Updating " + entity + " and triggering modal ");
      this.router.navigate([`${this.router.url}/${entity.id}`]);
    }

}
