import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineStockComponent } from './medicine-stock.component';

describe('MedicineStockComponent', () => {
  let component: MedicineStockComponent;
  let fixture: ComponentFixture<MedicineStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
