import { Component, OnInit } from '@angular/core';
import {Gups} from '../../_models/_lists/gups';
import {GupService} from "../../_services/_new/gup.service";

@Component({
  selector: 'app-gup-activation',
  templateUrl: './gup-activation.component.html',
  styleUrls: ['./gup-activation.component.css']
})
export class GupActivationComponent implements OnInit {
  gups:Gups;

  constructor(private gupService: GupService) {
    this.getGups();
    }

  ngOnInit() {
    this.getGups();
  }

  getGups(){
    this.gupService.getDataFromBackend().subscribe(response => this.gups.gups = response.gups);
  }

}
