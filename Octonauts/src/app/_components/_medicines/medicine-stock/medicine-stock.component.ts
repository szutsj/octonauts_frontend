import { Component, OnInit } from '@angular/core';
import {Gup} from "../../../_models/_mod/gup";
import {GupService} from "../../../_services/_new/gup.service";
import {Medicine} from "../../../_models/_mod/medicine";
import {BackendService} from "../../../_services/_new/backend.service";

@Component({
  selector: 'app-medicine-stock',
  templateUrl: './medicine-stock.component.html',
  styleUrls: ['./medicine-stock.component.css']
})
export class MedicineStockComponent implements OnInit {
  medicineStock: Medicine[];

  constructor(private backendService: BackendService) {
    console.log('medicineStock component constructor called');
    this.getMedicines();
  }

  ngOnInit() {
    console.log('medicineStock component ngOnInit called');
    this.getMedicines();
  }

  getMedicines(){
    console.log('medicineStock component getMedicines method called');
    this.backendService.getMedicineStockFromBackend().subscribe(response => this.medicineStock = response.medicines);
  }

}
