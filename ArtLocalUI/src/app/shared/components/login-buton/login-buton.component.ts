import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular'; 

@Component({
  selector: 'app-login-buton',
  templateUrl: './login-buton.component.html',
  styleUrls: ['./login-buton.component.css']
})
export class LoginButonComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  loginWithRedirect(): void {
    // what this method does is prompts users to authenticate and confirm consent
    this.auth.loginWithRedirect({
      appState: { target: '/admin/dashboard' } // this makes it so the user is redirected to this url
                                               // otherwise, users are redirected back to '/'
    })
  }
  
}

