import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gup',
  templateUrl: './gup.component.html',
  styleUrls: ['./gup.component.css']
})
export class GupComponent implements OnInit {
  @Input('type') type: string;

  constructor() {
  }

  ngOnInit() {

  }

}
