import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './core/services/auth/token.interceptor';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { PageNotFoundComponent } from './site/components/page-not-found/page-not-found.component';
import { AuthGuardService } from './core/services/auth/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}

const routes: Routes = [
  { path: '', loadChildren: './site/site.module#SiteModule' },
  {
    path: 'hr',
    loadChildren: './hr/hr.module#HrModule',
    canActivate: [AuthGuardService],
    data: {
      roles: ['hr']
    }
  },
  {
    path: 'me',
    loadChildren: './employee/employee.module#EmployeeModule',
    canActivate: [AuthGuardService],
    data: {
      roles: ['public']
    }
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],

  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    BrowserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:4200'],
        blacklistedRoutes: ['localhost:4200/login/']
      }
    }),
    ReactiveFormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }