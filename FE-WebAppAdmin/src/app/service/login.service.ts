import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:3000/adminPas/login';

  public urlencoded = new URLSearchParams();




  constructor(private http:HttpClient) { }

  public getLogin(){
    
    return this.http.get(this.url);

  }
}
