import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedConfigComponent } from './managed-config.component';

describe('ManagedConfigComponent', () => {
  let component: ManagedConfigComponent;
  let fixture: ComponentFixture<ManagedConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
