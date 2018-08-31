import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedTimesheetComponent } from './managed-timesheet.component';

describe('ManagedTimesheetComponent', () => {
  let component: ManagedTimesheetComponent;
  let fixture: ComponentFixture<ManagedTimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedTimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
