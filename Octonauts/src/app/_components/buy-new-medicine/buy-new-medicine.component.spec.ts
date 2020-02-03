import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyNewMedicineComponent } from './buy-new-medicine.component';

describe('BuyNewMedicineComponent', () => {
  let component: BuyNewMedicineComponent;
  let fixture: ComponentFixture<BuyNewMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyNewMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyNewMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
