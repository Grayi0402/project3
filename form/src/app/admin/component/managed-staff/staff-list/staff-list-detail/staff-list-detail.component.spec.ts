import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffListDetailComponent } from './staff-list-detail.component';

describe('StaffListDetailComponent', () => {
  let component: StaffListDetailComponent;
  let fixture: ComponentFixture<StaffListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
