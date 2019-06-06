import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'hr-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {
  public Editor = ClassicEditor;
  public announcement : string;

  constructor() { }

  ngOnInit() { }

  public onChange({ editor }: ChangeEvent) {
    this.announcement = editor.getData();
  }

  public sendAnnouncement(){
    console.log(`sending email with ${this.announcement}`)
  }

}
