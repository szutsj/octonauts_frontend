import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  constructor() {
    console.log('animalsComponent constructor called');
  }

  ngOnInit() {
    console.log('animalsComponent ngOnInit called');
  }

}
