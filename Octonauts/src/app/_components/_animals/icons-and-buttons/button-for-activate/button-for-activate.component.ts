import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-for-activate',
  templateUrl: './button-for-activate.component.html',
  styleUrls: ['./button-for-activate.component.css']
})
export class ButtonForActivateComponent implements OnInit {
  @Input('pictureName')
  pictureName: string;
  @Input('folder')
  folder: string;
  @Input('points')
  points: number;
  @Input('active')
  active: boolean;


  constructor() {
    console.log('buttonForActivationComponent constructor called');
  }

  ngOnInit() {
    console.log('buttonForActivationComponent ngOnInit called');
  }

  activate(){
    console.log('buttonForActivationComponent activate method called');
  }

}
