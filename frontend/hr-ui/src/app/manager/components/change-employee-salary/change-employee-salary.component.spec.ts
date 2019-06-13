import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeEmployeeSalaryComponent } from './change-employee-salary.component';

describe('ChangeEmployeeSalaryComponent', () => {
  let component: ChangeEmployeeSalaryComponent;
  let fixture: ComponentFixture<ChangeEmployeeSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeEmployeeSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeEmployeeSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
