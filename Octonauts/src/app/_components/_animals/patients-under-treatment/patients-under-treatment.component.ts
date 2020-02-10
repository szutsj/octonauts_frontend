import { Component, OnInit } from '@angular/core';
import {Patient} from "../../../_models/_mod/patient";
import {BackendService} from "../../../_services/_new/backend.service";

@Component({
  selector: 'app-patients-under-treatment',
  templateUrl: './patients-under-treatment.component.html',
  styleUrls: ['./patients-under-treatment.component.css']
})
export class PatientsUnderTreatmentComponent implements OnInit {
  patientsUnderTreatment: Patient[];

  constructor(private backendService: BackendService) {
    console.log('patientsUnderTreatmentComp constructor called');
    this.getPatinentsUnderTreatmentList();
  }

  ngOnInit() {
    console.log('patientsUnderTreatmentComp ngOnInit called');
    this.getPatinentsUnderTreatmentList();
  }

  getPatinentsUnderTreatmentList(){
    console.log('patientsUnderTreatmentComp getPatientsUnderTreatmentList method called');
    this.backendService.getUnderTreatmentListFromBackend()
      .subscribe(response => this.patientsUnderTreatment= response.patients);
  }

}
