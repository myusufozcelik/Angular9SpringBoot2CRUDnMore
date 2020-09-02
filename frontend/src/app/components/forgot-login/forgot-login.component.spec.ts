import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotLoginComponent } from './forgot-login.component';

describe('ForgotLoginComponent', () => {
  let component: ForgotLoginComponent;
  let fixture: ComponentFixture<ForgotLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
