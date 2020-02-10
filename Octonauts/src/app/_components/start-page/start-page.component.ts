import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor() {
    console.log('startPageComponent contructor called');
  }

  ngOnInit() {
    console.log('startPage ngOnInit called');
  }

}
