import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './components/index/index.component';
import { AboutComponent } from './components/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';

import { CoreModule } from '../core/core.module';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  { 
    path: '', 
    component: IndexComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutComponent }
    ]
  }
];

@NgModule({
  declarations: [
    IndexComponent, 
    AboutComponent, 
    LoginComponent,
    ChatComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CoreModule
  ],
  providers: [],
})

export class SiteModule { }
