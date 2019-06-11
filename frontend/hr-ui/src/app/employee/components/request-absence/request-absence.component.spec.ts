import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAbsenceComponent } from './request-absence.component';

describe('RequestAbsenceComponent', () => {
  let component: RequestAbsenceComponent;
  let fixture: ComponentFixture<RequestAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
