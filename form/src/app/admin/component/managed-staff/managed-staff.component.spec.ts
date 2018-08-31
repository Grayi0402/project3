import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedStaffComponent } from './managed-staff.component';

describe('ManagedStaffComponent', () => {
  let component: ManagedStaffComponent;
  let fixture: ComponentFixture<ManagedStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
