import { Component, OnInit } from '@angular/core';
import { Customer, ApiService, AuthService } from 'src/app/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent  {

  customer: Customer;
  invalidLogin: boolean;

  // inject services for router, api, and authentication
  constructor(private router: Router, 
              private apiService: ApiService,
              private authService: AuthService) { 

    // create an empty customer object to send to the
    // backend to test against, since only the userName
    // and password will be tested
    this.customer = {
      customerId: "00000000-0000-0000-0000-000000000000",
      firstName:"firstName",
      lastName: "lastName",
      userName: "",
      password: "",
      address: "address",
      city: "city",
      state: "state",
      postalCode: 1,
      country: "country",
      phoneNumber: "phoneNumber"
    }

    // also set the login state
    this.invalidLogin = false;
  }

  login(): void {
    console.log(this.customer);

    this.apiService.authenticateCustomer(this.customer)
    .subscribe(
      response => {
        // if the response isn't null, that means the customer
        // credentials were authenticated and a jwt was sent back
        if (response) {
          const token = response;
          this.authService.customerLogIn(token, this.customer);
          this.router.navigate(['/']);
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
