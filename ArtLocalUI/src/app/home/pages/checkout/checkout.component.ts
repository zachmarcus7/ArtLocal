import { Component, OnInit } from '@angular/core';
import { Customer, ApiService, Invoice } from 'src/app/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // create objects for storing data from form
  customer: Customer;
  invoice: Invoice;


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

    // also initialize an empty invoice object
    this.invoice = {
      invoiceId: "00000000-0000-0000-0000-000000000000",
      artworkId: "",
      customerId: "",
      dateBought: "",
      sellPrice: 0
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.apiService.createCustomer(this.customer)
    .subscribe(
      response => {
        console.log(response)
      }
    )
  }

}
