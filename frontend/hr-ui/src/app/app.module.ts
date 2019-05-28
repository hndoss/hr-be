import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SiteModule } from './site/site.module';
import { CoreModule } from './core/core.module';
import { TokenInterceptor } from './core/services/auth/token.interceptor';

const routes: Routes = [
  { path: '', loadChildren: './site/site.module#SiteModule' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    SiteModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
