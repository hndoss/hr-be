import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { RequestAbsenceComponent } from './components/request-absence/request-absence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';


const routes: Routes = [
  {
    path: '', 
    component: HomeComponent, 
    children: [
      { path: 'make-request', component: RequestAbsenceComponent }
    ]
  }
];

@NgModule({
  declarations: [
    RequestAbsenceComponent, 
    HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    CoreModule,
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule
  ]
})

export class EmployeeModule { }