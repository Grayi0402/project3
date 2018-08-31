import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginToRoleComponent } from './login-to-role.component';

describe('LoginToRoleComponent', () => {
  let component: LoginToRoleComponent;
  let fixture: ComponentFixture<LoginToRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginToRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginToRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
