import { Component, OnInit } from '@angular/core';
import { Customer, ApiService, AuthService} from 'src/app/core';
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
              private authService: AuthService) { 

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
        this.login()
      )
    )
  }

  login(): void {
    this.apiService.authenticateCustomer(this.customer)
    .subscribe(
      response => {
        // if the response isn't null, that means the customer
        // credentials were authenticated and a jwt was sent back
        if (response) {
          const token = response;
          this.authService.customerLogIn(token, this.customer);
          this.router.navigate(['/']);
        }
      }
    )
  }

}