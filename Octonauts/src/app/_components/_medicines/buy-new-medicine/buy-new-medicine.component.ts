import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-new-medicine',
  templateUrl: './buy-new-medicine.component.html',
  styleUrls: ['./buy-new-medicine.component.css']
})
export class BuyNewMedicineComponent implements OnInit {

  constructor() {
    console.log('buyNewMedicine constructor called');
  }

  ngOnInit() {
    console.log('buyNewMedicine Comp nngOnInit called');
  }

}
