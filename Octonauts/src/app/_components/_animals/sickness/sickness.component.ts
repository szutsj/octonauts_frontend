import {Component, Input, OnInit} from '@angular/core';
import {Sickness} from "../../../_models/_mod/sickness";

@Component({
  selector: 'app-sickness',
  templateUrl: './sickness.component.html',
  styleUrls: ['./sickness.component.css']
})
export class SicknessComponent implements OnInit {
  @Input('sickness')
  sickness: Sickness;

  constructor() { }

  ngOnInit() {
  }

}
