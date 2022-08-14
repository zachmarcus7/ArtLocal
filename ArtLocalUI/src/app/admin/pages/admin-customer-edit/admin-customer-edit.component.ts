import { Component, OnInit } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { Customer, ApiService } from 'src/app/core';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-admin-customer-edit',
  templateUrl: './admin-customer-edit.component.html',
  styleUrls: ['./admin-customer-edit.component.css']
})
export class AdminCustomerEditComponent implements OnInit {

  customers: Customer[];
  customer: Customer;

  constructor(private apiService: ApiService) { 
    // create empty objects to store data in
    this.customers = [];
    this.customer = new Customer();
  }

  ngOnInit(): void {
    this.getAllRecords();
  }

  getAllRecords() {
    this.apiService.getAllCustomers()
    .subscribe( 
      response => (
        this.customers = response
      )
    );
  }

  clearForm() {
    this.getAllRecords(); 
    this.customer = new Customer();
  }

  onSubmit() {
    // check if we're receiving a new record
    if (this.customer.customerId === "00000000-0000-0000-0000-000000000000") {
      this.apiService.createCustomer(this.customer)
      .subscribe( 
        response => {
          console.log(response);
          // once we get a response, clear out the forms
          this.clearForm();
        }
      )
    }
    // otherwise, this means that we're receiving an update request
    // instead of creating a new record
    else {
      this.updatecustomer(this.customer);
    }
  }

  updatecustomer(customer: Customer) {
    this.apiService.updateCustomer(this.customer.customerId, customer)
    .subscribe(
      response => {
        // with the response, just refresh the list on the right
        this.getAllRecords();
      }
    )
  }

  populateForm(customer: Customer) {
    // this will work with the two way binding we set up
    // so that the form will populate with the record details
    // when that record is clicked on the right
    this.customer = customer;
  }
}
