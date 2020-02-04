import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GupComponent } from './gup.component';

describe('GupComponent', () => {
  let component: GupComponent;
  let fixture: ComponentFixture<GupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
