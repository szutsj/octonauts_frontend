import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

import { RegisterService } from '../../../_services/_old/register.service';
import { UserService } from '../../../_services/_old/user.service';
import { LoginService } from '../../../_services/_old/login.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  constructor(
    private registerService: RegisterService,
    private loginService: LoginService,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog) { }

  username: string;
  password: string;
  submittedError: boolean;
  submitted = false;
  processStarted = false;
  isError = false;
  error: HttpErrorResponse;

  ngOnInit() {
  }

  startProcess() {
    this.processStarted = true;
  }

  onSubmit({value, valid}): void {
    if (!valid) {
      this.submittedError = true;
      return;
    }
    this.startProcess();
    this.submittedError = false;

    this.registerService.register(
    this.username,
    this.password,
    )
    .subscribe(
      resp => {
        this.processStarted = false;
        this.username = resp.username;
        this.submitted = true;
        this.loginService.login(this.username, this.password)
          .subscribe(
            response => {
              if (response.token) {
                this.userService.setToken(response.token);
                this.router.navigateByUrl('/octopod');
                this.dialog.closeAll();
              }
            });
        },
      error => {
        this.isError = true;
        this.error = error;
        console.log('test');
        this.processStarted = false;
        });
  }
}
