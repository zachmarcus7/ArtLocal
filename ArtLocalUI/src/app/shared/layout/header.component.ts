import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core';
 
@Component({
  selector: 'app-header',
  templateUrl: `./header.component.html`,
  styleUrls: []
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean;

  constructor(private authenticationService: AuthenticationService) {
    this.loggedIn = false;
  }

  ngOnInit() {
    this.getLoggedInValue();
  }

  getLoggedInValue() {
    this.authenticationService.isLoggedIn()
    .subscribe(
      response => (
        this.loggedIn = response
      )
    )
  }

  logOut() {
    this.authenticationService.logOut();
  }
}

