import {Octopod} from '../../_models/_mod/octopod';
import {ROOT_URL} from '../../constants';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ErrorHandlingService} from '../_old/error-handling.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService, private router: Router) { }



  logoutUser() {
    localStorage.removeItem('TOKEN');
    this.router.navigateByUrl('/login');
  }

}
