import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsUnderTreatmentComponent } from './patients-under-treatment.component';

describe('PatientsUnderTreatmentComponent', () => {
  let component: PatientsUnderTreatmentComponent;
  let fixture: ComponentFixture<PatientsUnderTreatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsUnderTreatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsUnderTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
