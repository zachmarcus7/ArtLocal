import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular'; 

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    // Call this to log the user out of the application
    this.auth.logout({returnTo: "http://localhost:4200/admin"});
  }

}
