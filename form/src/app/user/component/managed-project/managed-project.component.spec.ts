import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedProjectComponent } from './managed-project.component';

describe('ManagedProjectComponent', () => {
  let component: ManagedProjectComponent;
  let fixture: ComponentFixture<ManagedProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
