import { typeWithParameters } from "@angular/compiler/src/render3/util";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "src/app/service/login.service";




@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: FormGroup | any;

  constructor(private api: LoginService) {}

  ngOnInit(): void {
    this.form = this.createFormGroup();
    this.api.getLogin().subscribe((data) => {
      console.log(data);


    });

  }

  
  createFormGroup(): FormGroup {

    return new FormGroup({
      username: new FormControl("", [Validators.required]),
      passwordUser: new FormControl("", [Validators.required]),

    });

  }



  login(): void {

    //const username = this.form.value.username;
    //const password = this.form.value.passwordUser;

    this.api.getLogin().subscribe((data) => {
      console.log(data);
  

    });
  }



  /*
  login(): void {
    console.log(this.form.value);

  
    if(this.form.value.username == "admin" && this.form.value.passwordUser == "admin"){
      alert("Login Successful");
      window.location.href='/dashboard';
    }
  }
    */



}
