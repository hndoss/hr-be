import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from 'src/app/core/models/userprofile/userprofile';
import { Department } from 'src/app/core/models/department/department';
import { DepartmentService } from 'src/app/core/services/department/department.service';

@Component({
  selector: 'hr-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {
  private employee: any;
  private employeeDepartment: any;
  private departments: Department[];
  private needUpdate: boolean= false;

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params.id;
      this.getEmployee(id);
    })
  }

  private getEmployee(id: number) {
    this.employee = {};
    this.employee = this.employeeService.getEmployee(id)
      .subscribe((employee: UserProfile) => {
        this.employee = employee;
        this.getDepartments();
      })
  }

  private getDepartments() {
    this.departments = [];
    this.departmentService.getDepartments()
      .subscribe((departments: Department[]) => {
        this.departments = departments;
        this.employeeDepartment = this.getEmployeeDepartment(this.employee.department);
      });
  }

  private getEmployeeDepartment(departmentId: number) {
    return this.departmentService.getDepartment(departmentId)
      .subscribe((department: Department) => {
        return department;
      });
  }

  private updateSelectedDepartment(department: Department){
    this.employeeDepartment = department;
    this.needUpdate = true;
  }

  private saveChanges(){
    this.employee.department = this.employeeDepartment.id;
    this.employeeService.updateEmployee(this.employee);
  }
}
