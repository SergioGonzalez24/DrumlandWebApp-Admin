import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  myappUrl = 'http://localhost:8080/';

  constructor() { }
}
