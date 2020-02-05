import {Component, OnInit} from '@angular/core';
import {Gup} from "../../_models/_mod/gup";
import {BackendService} from "../../_services/_new/backend.service";

@Component({
  selector: 'app-gup-activation',
  templateUrl: './gup-activation.component.html',
  styleUrls: ['./gup-activation.component.css']
})
export class GupActivationComponent implements OnInit {
    gups: Gup[];

  constructor(private backendService: BackendService) {
    this.getGups();
    }

  ngOnInit() {
    this.getGups();
  }

  getGups(){
    this.backendService.getGupListFromBackend().subscribe(response => this.gups = response.gups);
  }

}
