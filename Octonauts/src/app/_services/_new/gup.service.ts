import {Gups} from '../../_models/_lists/gups';
import {ROOT_URL} from '../../constants';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ErrorHandlingService} from '../_old/error-handling.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GupService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private http: HttpClient, private errorHandlingService: ErrorHandlingService, private router: Router) { }

  getDataFromBackend(): Observable<Gups> {
    return this.http.get<Gups>(ROOT_URL + '/octopod/gups');
  }

}
