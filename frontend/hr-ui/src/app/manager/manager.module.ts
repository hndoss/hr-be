import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeEmployeeSalaryComponent } from './components/change-employee-salary/change-employee-salary.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ApplyEmployeeSalaryComponent } from './components/apply-employee-salary/apply-employee-salary.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent,
    children: [
      { path: 'change-employee-salary', component: ChangeEmployeeSalaryComponent },
      { path: 'change-employee-salary/:id', component: ApplyEmployeeSalaryComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ChangeEmployeeSalaryComponent, 
    HomeComponent, ApplyEmployeeSalaryComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(routes)
  ]
})
export class ManagerModule { }
