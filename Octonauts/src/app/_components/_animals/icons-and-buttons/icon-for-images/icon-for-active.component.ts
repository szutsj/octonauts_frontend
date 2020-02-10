import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-for-active',
  templateUrl: './icon-for-active.component.html',
  styleUrls: ['./icon-for-active.component.css']
})
export class IconForActiveComponent implements OnInit {
  @Input('pictureName')
  pictureName: string;
  @Input('folder')
  folder: string;
  @Input('points')
  points: number;
  @Input('active')
  active: boolean;

  constructor() {
    console.log('iconForActiveComponent constructor called');
  }

  ngOnInit() {
    console.log('iconForActiveComponent ngOnInit called');
  }

}
