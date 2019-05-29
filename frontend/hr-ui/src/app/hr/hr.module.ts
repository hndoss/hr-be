import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent, 
    children: [
      { path: 'employees',
        component: ListEmployeesComponent 
      }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ListEmployeesComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CoreModule
  ]
})

export class HrModule { }