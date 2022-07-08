import { Component, OnInit } from '@angular/core';
import { Customer, ApiService, AdminAuthenticationService, Admin } from 'src/app/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  admin: Admin;

  constructor(private apiService: ApiService, 
              private adminAuthenticationService: AdminAuthenticationService,
              private router: Router) {
    // create an empty admin object to store data from form in
    this.admin = {
      adminId: "00000000-0000-0000-0000-000000000000",
      userName: "",
      password: ""
    }
  }

  login(): void {
    // authenticate the admin with the back end
    this.apiService.authenticateAdmin(this.admin)
    .subscribe(
      response => (
        // if the response status is 200, then save the admin data
        // sent back in the response
        response.status == 200 ? this.saveUser(response.body) : this.dontSave()
      )
    )
  }

  saveUser(response: Admin | null) {
    this.adminAuthenticationService.logIn();
    this.router.navigate(['admin/dashboard']);
  }

  dontSave() {
    console.log("not saving");
  }

}
