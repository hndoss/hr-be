import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CoreModule } from '../core/core.module';

import { AuthGuardService } from '../core/services/auth/auth-guard.service';

const routes: Routes = [
  { path: 'hr/home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'hr/employees', component: ListEmployeesComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  declarations: [
    HomeComponent,
    ListEmployeesComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    CoreModule
  ]
})
export class HrModule { }
