import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../_services/_new/backend.service";
import {HeaderService} from "../../_services/_new/header.service";
import {UserAndPoint} from "../../_models/_mod/userAndPoint";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userAndPoint: UserAndPoint = new UserAndPoint();

  constructor(private backendService: BackendService, private headerService: HeaderService) {
    console.log('headerComponent constructor called');
    this.getUserAndPoint();
  }

  ngOnInit() {
    console.log('headerComponent ngOnInit called');
    this.getUserAndPoint();
  }

  getUserAndPoint() {
    console.log('headerComponent getUserAndPoint method called');
    this.backendService.getUserAndPointFromBackend().subscribe(response => this.userAndPoint = response);
  }

  logoutUser() {
    this.headerService.logoutUser();
  }

}
