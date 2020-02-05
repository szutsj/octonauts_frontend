import {Component, Input, OnInit} from '@angular/core';
import {Patient} from "../../_models/_mod/patient";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @Input('type')
  animal: Patient;

  constructor() {
  }

  ngOnInit() {

  }

}
