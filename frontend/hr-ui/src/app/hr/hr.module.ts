import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CoreModule } from '../core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { AnnouncementsComponent } from './components/announcements/announcements.component';

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent, 
    children: [
      { path: 'employees', component: ListEmployeesComponent },
      { path: 'employees/:id', component: EmployeeDetailsComponent },
      { path: 'announcements', component: AnnouncementsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    ListEmployeesComponent,
    EmployeeDetailsComponent,
    AnnouncementsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CoreModule,
    NgbModule,
    CKEditorModule
  ]
})

export class HrModule { }