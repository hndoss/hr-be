import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';

@Component({
  selector: 'hr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private employeeService : EmployeeService
  ) { }

  ngOnInit() {  }

  private pdf(){
    console.log("click")
    this.employeeService.getPDF();
  }

}
