import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<div>{{BE-WebAppAdmin}}</div>`
})


export class AppComponent {
  title = 'FE-WebAppAdmin';
  BE_WebAppAdmin = 'BE-WebAppAdmin';
}
