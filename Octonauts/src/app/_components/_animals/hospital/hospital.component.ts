import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {


  constructor() {
    console.log('hospitalComponent constructor called');
  }

  ngOnInit() {
    console.log('hospitalComponent ngOnInit called');
  }
}
