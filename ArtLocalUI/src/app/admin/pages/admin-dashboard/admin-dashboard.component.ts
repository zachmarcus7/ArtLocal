import { Component, OnInit } from '@angular/core';
import { Customer, ApiService, Admin } from 'src/app/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  buttonClicked: boolean;
  profileJson: string = "";

  constructor(public auth: AuthService) {
    this.buttonClicked = false;
  }

  ngOnInit(): void {
    // here we're subscribing to the auth0 user Observable
    // once the Observable emits the profile object, we assign it to a property
    this.auth.user$.subscribe(
      (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
    )
  }

  receiveMessage(msg: boolean): void {
    this.buttonClicked = !this.buttonClicked;
  }

}
