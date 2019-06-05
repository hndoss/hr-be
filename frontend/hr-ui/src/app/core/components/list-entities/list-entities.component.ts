import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'core-list-entities',
  templateUrl: './list-entities.component.html',
  styleUrls: ['./list-entities.component.css']
})
export class ListEntitiesComponent implements OnInit {

  @Input() entities: any[];
  @Input() properties: any[];
  @Input() title: string;
  @Input() subtitle: string;

  @Output() callForUpdate = new EventEmitter();
  
  constructor() { 
    if(!this.title)
      this.title="Generic List"
  }
  
  ngOnInit() { }

  private clickOnEntity(entity: any){
    this.callForUpdate.emit(entity)
  }
}
