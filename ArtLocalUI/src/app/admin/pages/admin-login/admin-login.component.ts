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
    this.admin = {
      adminId: "00000000-0000-0000-0000-000000000000",
      userName: "",
      password: ""
    }

    // set the invalidLogin to false since no login attempts have been made yet
    this.invalidLogin = false;
  }

  login(): void {
    this.apiService.authenticateAdmin(this.admin)
    .subscribe(
      response => {
        // if the response isn't null, that means the admin
        // credentials were authenticated and a jwt was sent back
        if (response) {
          const token = response;
          this.authService.adminLogIn(token);
          this.router.navigate(['admin/dashboard']);
          this.invalidLogin = false;
        } 
        else {
          this.invalidLogin = true;
        }
      },
      err => {
        this.invalidLogin = true;
      }
    )
  }
}
