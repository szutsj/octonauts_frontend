import { Component, OnInit } from '@angular/core';
import {Gups} from '../../_models/_lists/gups';
import {GupService} from "../../_services/_new/gup.service";
import {Gup} from "../../_models/_mod/gup";

@Component({
  selector: 'app-gup-activation',
  templateUrl: './gup-activation.component.html',
  styleUrls: ['./gup-activation.component.css']
})
export class GupActivationComponent implements OnInit {
    gups: Gup[];

  constructor(private gupService: GupService) {
    this.getGups();
    }

  ngOnInit() {
    this.getGups();
  }

  getGups(){
    this.gupService.getDataFromBackend().subscribe(response => this.gups = response.gups);
  }

}
