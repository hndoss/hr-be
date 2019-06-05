import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CoreModule } from '../core/core.module';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent, 
    children: [
      { path: 'employees', component: ListEmployeesComponent },
      { path: 'employees/:id', component: EmployeeDetailsComponent },
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ListEmployeesComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CoreModule,
    NgbModule
  ]
})

export class HrModule { }