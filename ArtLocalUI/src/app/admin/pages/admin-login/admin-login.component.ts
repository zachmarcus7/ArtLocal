import { Component, OnInit } from '@angular/core';
import { Customer, ApiService, Admin } from 'src/app/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  admin: Admin;
  invalidLogin: boolean;

  constructor(private apiService: ApiService, 
              private authService: AuthService,
              private router: Router) {
                
    // create an empty admin object to store data from form in
    this.admin = new Admin();

    // set the invalidLogin to false since no login attempts have been made yet
    this.invalidLogin = false;
  }

  login() {}

}
