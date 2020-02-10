import {Component, OnInit} from '@angular/core';
import {Gup} from "../../../_models/_mod/gup";
import {BackendService} from "../../../_services/_new/backend.service";
import {CrewMember} from "../../../_models/_mod/crewMember";
import {UserAndPoint} from "../../../_models/_mod/userAndPoint";

@Component({
  selector: 'app-gup-activation',
  templateUrl: './gup-activation.component.html',
  styleUrls: ['./gup-activation.component.css']
})
export class GupActivationComponent implements OnInit {
  gups: Gup[];
  activeGups: Gup[];
  inactiveGups: Gup[];
  canBeActivated: Gup[];
  cannotBeActivated: Gup[];
  userAndPoints: UserAndPoint;

  constructor(private backendService: BackendService) {
    console.log('gupActivationComp contructor called');
    this.getActualPoints();
    this.getGups();
    this.getCanBeActivated();
    this.getCannotBeActivated();
  }

  ngOnInit() {
    console.log('gupActivationComp ngOnInit called');
    this.getActualPoints();
    this.getGups();
    this.getCanBeActivated();
    this.getCannotBeActivated();
  }

  getActualPoints(){
    console.log('gupActivationComp getActualPoints method called');
    this.backendService.getUserAndPointFromBackend().subscribe(response => this.userAndPoints =  response);
  }

  getGups(){
    console.log('gupActivationComp getGups method called');
    this.backendService.getGupListFromBackend().subscribe(response => this.gups = response.gups);
    this.activeGups = this.gups.filter(gup => gup.active === true);
    this.inactiveGups = this.gups.filter(gup => gup.active === false);
  }


  getCanBeActivated(){
    console.log('gupActivationComp canBeActivated method called');
    console.log('points: ' + this.userAndPoints.points);
    this.canBeActivated = this.inactiveGups.filter(gup => gup.activationPoints <= this.userAndPoints.points);
  }

  getCannotBeActivated(){
    console.log('gupActivationComp cannotBeActivated method called');
    console.log('points: ' + this.userAndPoints.points);
    this.cannotBeActivated = this.inactiveGups.filter(gup => gup.activationPoints > this.userAndPoints.points);
  }

}
