import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEntitiesComponent } from './components/list-entities/list-entities.component';

@NgModule({
  declarations: [
    ListEntitiesComponent
  ],
  exports: [
    ListEntitiesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
