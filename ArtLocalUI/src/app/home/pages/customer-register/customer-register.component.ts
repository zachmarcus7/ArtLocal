import { Component, OnInit } from '@angular/core';
import { Customer, ApiService} from 'src/app/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-register',
  templateUrl: './customer-register.component.html',
  styleUrls: ['./customer-register.component.css']
})
export class CustomerRegisterComponent {
  
  // create customer object for storing data from form in
  customer: Customer;

  // inject the api service into the constructor
  constructor(private apiService: ApiService) { 
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

  onSubmit(): void {
    console.log(this.customer);
  }

}