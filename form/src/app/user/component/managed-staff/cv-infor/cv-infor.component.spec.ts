import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvInforComponent } from './cv-infor.component';

describe('CvInforComponent', () => {
  let component: CvInforComponent;
  let fixture: ComponentFixture<CvInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
