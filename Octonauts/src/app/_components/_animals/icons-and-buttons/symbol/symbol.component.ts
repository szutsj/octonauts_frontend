import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-symbol',
  templateUrl: './symbol.component.html',
  styleUrls: ['./symbol.component.css']
})
export class SymbolComponent implements OnInit {

  constructor() {
    console.log('symbolComponent constructor called');
  }

  ngOnInit() {
    console.log('symbolComponent ngOnInit called');
  }

}
