import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffInforComponent } from './staff-infor.component';

describe('StaffInforComponent', () => {
  let component: StaffInforComponent;
  let fixture: ComponentFixture<StaffInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
