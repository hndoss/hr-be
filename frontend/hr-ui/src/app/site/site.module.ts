import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HrModule } from '../hr/hr.module';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'hr/home', loadChildren: '../hr/hr.module#HrModule'}
];

@NgModule({
  declarations: [
    IndexComponent, 
    AboutComponent, LoginComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HrModule
  ]
})
export class SiteModule { }
