import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core';
import { Router, ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-header',
  templateUrl: `./header.component.html`,
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  customerLoggedIn: boolean;
  adminLoggedIn: boolean;
  currentName: string;
  showCustomerLogIn: boolean;

  constructor(private authService: AuthService,
              private router: Router) {
                
    this.customerLoggedIn = false;
    this.adminLoggedIn = false;
    this.currentName = "";
    this.showCustomerLogIn = true;

    // check if we're on one of the admin pages
    // if so, then the login option becomes disabled
    router.events.subscribe(event => {
      // get the current values from the route
      var routeSplit = (router.url.split('/'));

      // if the admin keyword is in the route, don't show log in
      if (routeSplit.includes('admin')) {
        this.showCustomerLogIn = false;
      }
      else {
        this.showCustomerLogIn = true;
      }
    });
  }

  ngOnInit() {
    //this.getCustomerLoggedInValue();
    //this.getAdminLoggedInValue();
    //this.getNameValue();
  }

  /*
  getCustomerLoggedInValue() {
    this.authService.customerLoggerObs()
    .subscribe(
      response => (
        this.customerLoggedIn = response
      )
    )
  }

  getAdminLoggedInValue() {
    this.authService.adminLoggerObs()
    .subscribe(
      response => (
        this.adminLoggedIn = response
      )
    )
  }

  getNameValue() {
    this.authService.getCurrentName()
    .subscribe(
      response => (
        this.currentName = response
      )
    )
  }

  logOut() {
    if (this.customerLoggedIn) {
      this.authService.customerLogOut();
    }
    else {
      this.authService.adminLogOut();
    }
  }
  */

  logOut() {}
}

