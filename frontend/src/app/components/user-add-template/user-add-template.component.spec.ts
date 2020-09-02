import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddTemplateComponent } from './user-add-template.component';

describe('UserAddTemplateComponent', () => {
  let component: UserAddTemplateComponent;
  let fixture: ComponentFixture<UserAddTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
