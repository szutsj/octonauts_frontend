import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../_services/_new/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string;

  constructor(private headerService: HeaderService) {
    this.getUserName();
  }

  ngOnInit() {
    this.getUserName();
  }

  getUserName() {
    this.headerService.getDataFromBackend().subscribe(response => this.userName = response.userAndPoint.username );
  }

  logoutUser() {
    this.headerService.logoutUser();
  }

}
