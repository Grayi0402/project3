import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedNotificationComponent } from './managed-notification.component';

describe('ManagedNotificationComponent', () => {
  let component: ManagedNotificationComponent;
  let fixture: ComponentFixture<ManagedNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
