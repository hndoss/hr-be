import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/core/services/department/department.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  departmentsDatasource: Object;

  constructor(
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
    this.departmentService.getEmployeesPerDepartment()
      .subscribe((res: any) => {
        this.departmentsDatasource = {
          chart: {
            "caption": "Departments Report",
            "subCaption": "Employees per Department",
            "xAxisName": "Departments",
            "yAxisName": "Employees",
            "numberSuffix": "",
            "theme": "fusion"
          },
          data: res
        };
      });
  }

}