import {Component, Input, OnInit} from '@angular/core';
import {Patient} from "../../../_models/_mod/patient";

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {
  @Input('patient')
  patient: Patient;

  constructor() {
    console.log('animalComponent constructor called');
    console.log(this.patient.sicknes.type.toString());
    console.log(this.patient.sicknes.medicinesNeeded.toString());
  }

  ngOnInit() {
    console.log('animalComponent ngOnInit called');
    console.log(this.patient.sicknes.type.toString());
    console.log(this.patient.sicknes.medicinesNeeded.toString());
  }

}
