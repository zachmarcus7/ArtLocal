import { Component, OnInit } from '@angular/core';
import { Customer, ApiService, AuthenticationService} from 'src/app/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent {
  
  // create customer object for storing data from form in
  customer: Customer;

  // inject services for router, api, and authentication
  constructor(private router: Router, 
              private apiService: ApiService,
              private authenticationService: AuthenticationService) { 

    // initialize an empty customer object
    // set the ID to an empty GUID value
    this.customer = {
      customerId: "00000000-0000-0000-0000-000000000000",
      firstName:"",
      lastName: "",
      userName: "",
      password: "",
      address: "",
      city: "",
      state: "",
      postalCode: 0,
      country: "",
      phoneNumber: ""
    }

  }

  createCustomer(): void {
    // authenticate the user with the back end
    this.apiService.createCustomer(this.customer)
    .subscribe(
      response => (
        this.saveCustomer(response)
      )
    )
  }

  saveCustomer(response: Customer | null) {
    // save the current user
    if (response != null) {
      this.authenticationService.logIn(response);
      this.router.navigate(['/']);
    }
  }

}