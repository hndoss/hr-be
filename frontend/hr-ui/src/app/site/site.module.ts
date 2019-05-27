import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { HrModule } from '../hr/hr.module';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'hr/home', loadChildren: '../hr/hr.module#HrModule'}
];

@NgModule({
  declarations: [
    IndexComponent, 
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    HrModule
  ]
})
export class SiteModule { }
