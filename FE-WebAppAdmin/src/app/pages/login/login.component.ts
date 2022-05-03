import { Component, OnInit} from '@angular/core';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;

  constructor(private loginService: LoginService) { }

  ngOnInit() {}


  login() {
    console.log(this.username);
    console.log(this.password);
  }
}


