import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private url = "https://be-drumlandwebapp-admin.azurewebsites.net";
  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get(this.url);
  }
}
