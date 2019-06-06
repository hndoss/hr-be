import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from 'src/app/core/models/userprofile/userprofile';
import { Department } from 'src/app/core/models/department/department';
import { DepartmentService } from 'src/app/core/services/department/department.service';
import { Job } from 'src/app/core/models/job/job';
import { JobService } from 'src/app/core/services/job/job.service';

@Component({
  selector: 'hr-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {
  private employee: any;
  private employeeDepartment: any;
  private employeeJob: any;
  private departments: Department[];
  private jobs: Job[];
  private needUpdate: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private jobService: JobService,
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
        this.getJobs();
      })
  }

  private getDepartments() {
    this.departments = [];
    this.departmentService.getDepartments()
      .subscribe((departments: Department[]) => {
        this.departments = departments;

        this.employeeDepartment = this.setEmployeeDepartment(this.employee.department);
      });
  }

  private setEmployeeDepartment(departmentId: number) {
    return this.departments.find(f => f.id === departmentId);
  }

  private getEmployeeDepartmentName(): string {
    if (this.employeeDepartment)
      return this.employeeDepartment.name;

    return '-----';
  }

  private updateSelectedDepartment(department: Department) {
    this.employeeDepartment = department;
    this.needUpdate = true;
  }

  private saveChanges() {
    this.employee.department = this.employeeDepartment.id;
    this.employee.job = this.employeeJob.id;
    this.employeeService.updateEmployee(this.employee);
  }

  private getJobs() {
    this.jobs = [];
    this.jobService.getJobs()
      .subscribe((jobs: Job[]) => {
        this.jobs = jobs;

        this.employeeJob = this.setEmployeeJob(this.employee.job);
      });
  }

  private setEmployeeJob(jobId: number) {
    return this.jobs.find(j => j.id === jobId);
  }

  private getEmployeeJobName(): string {
    if (this.employeeJob)
      return this.employeeJob.name;

    return '-----';
  }

  private updateSelectedJob(job: Job) {
    this.employeeJob = job;
    this.needUpdate = true;
  }

  private sendWorkRecord(){
    
  }
}