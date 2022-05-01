import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

//Servicios
import { LoginService } from './service/login.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent
  ],
  
  imports: [
    BrowserModule,
    
    HttpClientModule,

    AppRoutingModule,

    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
    ])
  ],

  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
