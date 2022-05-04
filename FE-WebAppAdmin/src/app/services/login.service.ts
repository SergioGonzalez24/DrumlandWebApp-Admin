import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface User {
  username: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLogin(username: string, password: string):Observable<User> {
    return this.http.get<User>('http://localhost:8080/adminPas/login');
  }
}
