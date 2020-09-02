import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddReactiveComponent } from './user-add-reactive.component';

describe('UserAddReactiveComponent', () => {
  let component: UserAddReactiveComponent;
  let fixture: ComponentFixture<UserAddReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
