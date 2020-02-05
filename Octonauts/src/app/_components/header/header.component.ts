import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../_services/_new/backend.service";
import {HeaderService} from "../../_services/_new/header.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userName: string;

  constructor(private backendService: BackendService, private headerService: HeaderService) {
    this.getUserName();
  }

  ngOnInit() {
    this.getUserName();
  }

  getUserName() {
    this.backendService.getUserAndPointFromBackend().subscribe(response => this.userName = response.username);
  }

  logoutUser() {
    this.headerService.logoutUser();
  }

}
