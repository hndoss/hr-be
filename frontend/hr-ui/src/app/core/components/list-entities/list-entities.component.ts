import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { 
    if(!this.title)
      this.title="Generic List"
  }
  
  ngOnInit() { }

}
