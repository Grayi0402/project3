import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffListAddComponent } from './staff-list-add.component';

describe('StaffListAddComponent', () => {
  let component: StaffListAddComponent;
  let fixture: ComponentFixture<StaffListAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffListAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
