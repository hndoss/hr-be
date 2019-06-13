import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyEmployeeSalaryComponent } from './apply-employee-salary.component';

describe('ApplyEmployeeSalaryComponent', () => {
  let component: ApplyEmployeeSalaryComponent;
  let fixture: ComponentFixture<ApplyEmployeeSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyEmployeeSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyEmployeeSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
