import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctopodComponent } from './octopod.component';

describe('OctopodComponent', () => {
  let component: OctopodComponent;
  let fixture: ComponentFixture<OctopodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctopodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctopodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
