import { Component, OnInit } from '@angular/core';
import { AdminAuthenticationService, AuthenticationService } from 'src/app/core';
 
@Component({
  selector: 'app-header',
  templateUrl: `./header.component.html`,
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;
  adminLoggedIn: boolean;
  currentName: string;

  constructor(private authenticationService: AuthenticationService,
              private adminAuthenticationService: AdminAuthenticationService) {
                
    this.loggedIn = false;
    this.adminLoggedIn = false;
    this.currentName = "";
  }

  ngOnInit() {
    this.getLoggedInValue();
    this.getNameValue();
  }

  getLoggedInValue() {
    this.authenticationService.isLoggedIn()
    .subscribe(
      response => (
        this.loggedIn = response
      )
    )
  }

  getAdminLoggedInValue() {
    this.adminAuthenticationService.isLoggedIn()
    .subscribe(
      response => (
        this.adminLoggedIn = response
      )
    )
  }

  getNameValue() {
    this.authenticationService.getCurrentName()
    .subscribe(
      response => (
        this.currentName = response
      )
    )
  }

  logOut() {
    this.authenticationService.logOut();
  }
}

