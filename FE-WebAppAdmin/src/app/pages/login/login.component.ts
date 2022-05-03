import { Component, OnInit, ResolvedReflectiveFactory } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string  = "admin";
  password: string = "admin";

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {

    if(this.username == "admin" && this.password == "admin") {
    console.log(this.username);
    console.log(this.password);
   }
  }
}
