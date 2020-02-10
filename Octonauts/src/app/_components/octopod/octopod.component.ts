import {Component, OnInit} from '@angular/core';
import {CrewMember} from "../../_models/_mod/crewMember";
import {BackendService} from "../../_services/_new/backend.service";
import {Gup} from "../../_models/_mod/gup";
import {Medicine} from "../../_models/_mod/medicine";


@Component({
  selector: 'app-octopod',
  templateUrl: './octopod.component.html',
  styleUrls: ['./octopod.component.css']
})
export class OctopodComponent implements OnInit {
  crew: CrewMember[];
  gups: Gup[];
  medicineStock: Medicine[];

  constructor(private backendService: BackendService) {
    console.log('octopodComponent constructor called');
    this.getCrew();
    this.getGups();
    this.getMedicineStock();
  }

  ngOnInit() {
    console.log('octopodComponent ngOnInit called');
    this.getCrew();
    this.getGups();
    this.getMedicineStock();
  }

  getCrew(){
    console.log('octopodComponent getCrew method called');
    this.backendService.getCrewFromBackend()
      .subscribe(response => this.crew = response.crewMembers
        .filter(crewMember => (crewMember.active === true)));
  }

  getGups(){
    console.log('octopodComponent getGups method called');
    this.backendService.getGupListFromBackend()
      .subscribe(response => this.gups = response.gups
        .filter(gup => (gup.active === true)));
  }

  getMedicineStock(){
    console.log('octopodComponent getMedicineStock method called');
    this.backendService.getMedicineStockFromBackend()
      .subscribe(response => this.medicineStock = response.medicines);
  }

}
