import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedSalaryComponent } from './managed-salary.component';

describe('ManagedSalaryComponent', () => {
  let component: ManagedSalaryComponent;
  let fixture: ComponentFixture<ManagedSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
