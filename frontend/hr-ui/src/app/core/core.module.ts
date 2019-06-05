import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEntitiesComponent } from './components/list-entities/list-entities.component';
import { EntityDetailsComponent } from './components/entity-details/entity-details.component';

@NgModule({
  declarations: [
    ListEntitiesComponent,
    EntityDetailsComponent
  ],
  exports: [
    ListEntitiesComponent,
    EntityDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
