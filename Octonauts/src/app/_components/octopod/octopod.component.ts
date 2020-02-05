import {Component, OnInit} from '@angular/core';
import {OctopodService} from 'src/app/_services/_new/octopod.service';

@Component({
  selector: 'app-octopod',
  templateUrl: './octopod.component.html',
  styleUrls: ['./octopod.component.css']
})
export class OctopodComponent implements OnInit {

  constructor(private octopodService: OctopodService) { }

  ngOnInit() {

     }

}
