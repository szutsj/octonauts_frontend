import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonForActivateComponent } from './button-for-activate.component';

describe('ButtonForActivateComponent', () => {
  let component: ButtonForActivateComponent;
  let fixture: ComponentFixture<ButtonForActivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonForActivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonForActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
