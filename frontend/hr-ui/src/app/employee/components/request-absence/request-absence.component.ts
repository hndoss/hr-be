import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/core/services/employee/employee.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { AbsenceService } from 'src/app/core/services/absence/absence.service';
import { Absence } from 'src/app/core/models/absence/absence';

@Component({
  selector: 'app-request-absence',
  templateUrl: './request-absence.component.html',
  styleUrls: ['./request-absence.component.css']
})

export class RequestAbsenceComponent implements OnInit {
  absenceType = "Select one";
  startAbsence : string;
  finishAbsence: string;

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthService,
    private absenceService: AbsenceService
  ) { }

  ngOnInit() { }

  private setAbsenceType(type: string) {
    if (type)
      this.absenceType = type;
    else this.absenceType = "Select one";
  }

  private submitAbsenceRequest() {
    const user = this.authService.getUser();
    const absence = new Absence(user.id, 'open', this.absenceType, this.startAbsence, this.finishAbsence);
    this.absenceService.saveAbsence(absence);
  }
}