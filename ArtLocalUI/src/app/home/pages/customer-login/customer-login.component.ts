import { Component, OnInit } from '@angular/core';
import { Customer, ApiService, AuthenticationService } from 'src/app/core';
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

  // inject services for router, api, and authentication
  constructor(private router: Router, 
              private apiService: ApiService,
              private authenticationService: AuthenticationService) { 

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
      postalCode: 0,
      country: "country",
      phoneNumber: "phoneNumber"
    }
  }

  login(): void {
    // authenticate the user with the back end
    this.apiService.authenticateCustomer(this.customer)
    .subscribe(
      response => (
        // if the response status is 200, then save the Customer data
        // sent back in the response
        response.status == 200 ? this.saveUser(response.body) : this.dontSave()
      )
    )
  }

  saveUser(response: Customer | null) {
    // save the current user
    if (response != null) {
      this.authenticationService.logIn(response);
      this.router.navigate(['/']);
    }
  }

  dontSave() {
    console.log("not saving");
  }
  
}
