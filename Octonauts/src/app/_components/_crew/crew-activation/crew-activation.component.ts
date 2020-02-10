import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../../_services/_new/backend.service";
import {CrewMember} from "../../../_models/_mod/crewMember";
import {ɵDOMTestComponentRenderer} from "@angular/platform-browser-dynamic/testing";
import {UserAndPoint} from "../../../_models/_mod/userAndPoint";

@Component({
  selector: 'app-crew-activation',
  templateUrl: './crew-activation.component.html',
  styleUrls: ['./crew-activation.component.css']
})
export class CrewActivationComponent implements OnInit {
  crew: CrewMember[];
  activeCrew: CrewMember[];
  inactiveCrew: CrewMember[];
  canBeActivated: CrewMember[];
  cannotBeActivated: CrewMember[];
  userAndPoints: UserAndPoint;

  constructor(private backendService: BackendService) {
    console.log('crewActivationComp contructor called');
    this.getActualPoints();
    this.getCrew();
    this.getCanBeActivated();
    this.getCannotBeActivated();
  }

  ngOnInit() {
    console.log('crewActivationComp ngOnInit called');
    this.getActualPoints();
    this.getCrew();
    this.getCanBeActivated();
    this.getCannotBeActivated();
  }

  getActualPoints(){
    console.log('crewActivationComp getActualPoints method called');
    this.backendService.getUserAndPointFromBackend().subscribe(response => this.userAndPoints =  response);
  }

  getCrew(){
    console.log('crewActivationComp getCrew method called');
    this.backendService.getCrewFromBackend().subscribe(response => this.crew = response.crewMembers);
    this.activeCrew = this.crew.filter(crewMember => crewMember.active === true);
    this.inactiveCrew = this.crew.filter(crewMember => crewMember.active === false);
  }


  getCanBeActivated(){
    console.log('crewActivationComp canBeActivated method called');
    console.log('points: ' + this.userAndPoints.points);
    this.canBeActivated = this.inactiveCrew.filter(crewMember => crewMember.activationPoints <= this.userAndPoints.points);
  }

  getCannotBeActivated(){
    console.log('crewActivationComp cannotBeActivated method called');
    console.log('points: ' + this.userAndPoints.points);
    this.cannotBeActivated = this.inactiveCrew.filter(crewMember => crewMember.activationPoints > this.userAndPoints.points);
  }

}
