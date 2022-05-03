import { Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {
    console.log(this.username);
    console.log(this.password);
  }
}
