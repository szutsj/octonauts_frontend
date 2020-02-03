import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GupActivationComponent } from './gup-activation.component';

describe('GupActivationComponent', () => {
  let component: GupActivationComponent;
  let fixture: ComponentFixture<GupActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GupActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GupActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
