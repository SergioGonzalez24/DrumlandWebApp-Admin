import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  username: string | undefined;
  password: string | undefined;
  
  constructor(private http: HttpClient) { }


  Postlogin() {
    const user = {username: this.username, password: this.password};
    this.http.post('https://drumlandwebapp-admin.azurewebsites.net', user).subscribe( data => {
      console.log(data);
    });
  }

}
