import { Component, OnInit } from '@angular/core';
import { Customer, ApiService, AuthService } from 'src/app/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';

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
    this.customer = new Customer(true);

    // also set the login state
    this.invalidLogin = false;
  }


  submitForm() {
    // need to do validation

    this.authService
      .login(this.customer.userName, this.customer.password)
      .subscribe((response) => {
        this.router.navigate(['/']);
      });
  }


 /*
  login(): void {

    this.apiService.authenticateCustomer(this.customer)
    .subscribe(
      response => {
        // if the response isn't null, that means the customer
        // credentials were authenticated and a jwt was sent back
        if (response) {
          const token = response;
          this.authService.customerLogIn(token);
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
  */
 
}
