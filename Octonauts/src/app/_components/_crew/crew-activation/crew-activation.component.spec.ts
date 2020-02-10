import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewActivationComponent } from './crew-activation.component';

describe('CrewActivationComponent', () => {
  let component: CrewActivationComponent;
  let fixture: ComponentFixture<CrewActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
