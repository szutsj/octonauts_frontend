import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../../_services/_new/backend.service";
import {Patient} from "../../../_models/_mod/patient";

@Component({
  selector: 'app-patients-waiting',
  templateUrl: './patients-waiting.component.html',
  styleUrls: ['./patients-waiting.component.css']
})
export class PatientsWaitingComponent implements OnInit {
  patientWaiting: Patient[];

  constructor(private backendService: BackendService) {
      console.log('patientsWatingComp constructor called');
      this.getPatinentsWatingList();
  }

  ngOnInit() {
    console.log('patientsWatingComp ngOnInit called');
    this.getPatinentsWatingList();
  }

  getPatinentsWatingList(){
    console.log('patientsWatingComp getPatientWaitingList called');
    this.backendService.getWaitingPatientListFromBackend()
      .subscribe(response => this.patientWaiting= response.patients);
  }

}
