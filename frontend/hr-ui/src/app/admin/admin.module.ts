import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './components/report/report.component';
import { Routes, RouterModule } from '@angular/router';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { HomeComponent } from './components/home/home.component';
FusionChartsModule.fcRoot(FusionCharts, Charts)

const routes: Routes = [
  {
    path: 'home', 
    component: HomeComponent,
    children: [
      { path: 'reports', component: ReportComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ReportComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FusionChartsModule
  ]
})

export class AdminModule { }