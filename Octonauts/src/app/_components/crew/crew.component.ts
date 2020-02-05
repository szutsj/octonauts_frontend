import {Component, Input, OnInit} from '@angular/core';
import {CrewMember} from "../../_models/_mod/crewMember";

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  @Input('name')
  crewMember: CrewMember;

  constructor() { }

  ngOnInit() {
  }

}
