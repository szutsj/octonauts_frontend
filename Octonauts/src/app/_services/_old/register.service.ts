import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';
import { ROOT_URL } from '../../constants';

import { User } from '../../_models/_mod/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient,
              private errorHandlingService: ErrorHandlingService) { }


  register(username: string, password: string): Observable<User> {
    return this.http.post<User>(ROOT_URL + '/register', {
      username,
      password,
    })
    .pipe(
      catchError(this.errorHandlingService.handleError)
    );
  }
}
