import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService, AuthService } from 'src/app/core';
import { Customer } from 'src/app/core';

 
@Component({
  selector: 'app-user-header',
  templateUrl: `./user-header.component.html`,
  styleUrls: []
})
export class UserHeaderComponent implements OnInit {

  customer: Customer = new Customer();
  currentCustomerName: string = "";

  constructor(
    public authService: AuthService,
    private apiService: ApiService, 
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentCustomerName.subscribe(
      (name) => (this.currentCustomerName = name)
    )
  }

  logOut() {
    this.authService.logout();
  }
}

