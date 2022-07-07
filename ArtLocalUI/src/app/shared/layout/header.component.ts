import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core';
 
@Component({
  selector: 'app-header',
  templateUrl: `./header.component.html`,
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;
  currentName: string;

  constructor(private authenticationService: AuthenticationService) {
    this.loggedIn = false;
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

