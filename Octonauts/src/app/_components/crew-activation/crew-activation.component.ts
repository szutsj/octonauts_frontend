import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../_services/_new/backend.service";
import {CrewMember} from "../../_models/_mod/crewMember";

@Component({
  selector: 'app-crew-activation',
  templateUrl: './crew-activation.component.html',
  styleUrls: ['./crew-activation.component.css']
})
export class CrewActivationComponent implements OnInit {
  crew: CrewMember[];

  constructor(private backendService: BackendService) {
    this.getCrew();
  }

  ngOnInit() {
    this.getCrew();
  }

  getCrew(){
    this.backendService.getCrewFromBackend().subscribe(response => this.crew = response.crewMembers);
  }

}
