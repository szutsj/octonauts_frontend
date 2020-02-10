import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconForActiveComponent } from './icon-for-active.component';

describe('IconForActiveComponent', () => {
  let component: IconForActiveComponent;
  let fixture: ComponentFixture<IconForActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconForActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconForActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
