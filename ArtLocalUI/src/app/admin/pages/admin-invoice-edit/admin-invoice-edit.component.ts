import { Component, OnInit } from '@angular/core';
import { Invoice, Artwork, Customer, ApiService } from 'src/app/core';

@Component({
  selector: 'app-admin-invoice-edit',
  templateUrl: './admin-invoice-edit.component.html',
  styleUrls: ['./admin-invoice-edit.component.css']
})
export class AdminInvoiceEditComponent implements OnInit {

  invoices: Invoice[];
  invoice: Invoice;
  artwork: Artwork[];
  customers: Customer[];

  constructor(private apiService: ApiService) { 
    // create empty objects to store data in
    this.invoices = [];
    this.artwork = [];
    this.customers = [];
    this.invoice = {
      invoiceId: "",
      artworkId: "",
      customerId: "",
      dateBought: new Date(''),
      sellPrice: 0
    }
  }

  ngOnInit(): void {
    this.getAllRecords();
    this.getAllArtwork();
    this.getAllCustomers();
  }

  getAllRecords() {
    this.apiService.getAllInvoices()
    .subscribe( 
      response => (
        this.invoices = response
      )
    );
  }

  getAllArtwork() {
    this.apiService.getAllArtwork()
    .subscribe(
      response =>
        this.artwork = response
    )
  }

  getAllCustomers() {
    this.apiService.getAllCustomers()
    .subscribe(
      response =>
        this.customers = response
    )
  }

  clearForm() {
    this.getAllRecords(); 
    this.invoice = {
      invoiceId: "",
      artworkId: "",
      customerId: "",
      dateBought: new Date(''),
      sellPrice: 0
    };
  }

  getMatchingArtwork(artworkId: string) {
    for (var i = 0; i < this.artwork.length; i++) {
      if (this.artwork[i].artworkId === artworkId) 
        return (`${this.artwork[i].title}`);
    }
    return "Not Found";
  }

  getMatchingCustomer(customerId: string) {
    for (var i = 0; i < this.customers.length; i++) {
      if (this.customers[i].customerId === customerId) 
        return (`${this.customers[i].firstName} ${this.customers[i].lastName}`);
    }
    return "Not Found";
  }

  populateForm(invoice: Invoice) {
    // first, clear the form
    this.clearForm();

    // then, create a new artwork object to copy values into
    var newInvoice = invoice;

    // then, need to update the values that have id's
    newInvoice.artworkId = this.getMatchingArtwork(invoice.artworkId);
    newInvoice.customerId = this.getMatchingCustomer(invoice.customerId);

    this.invoice = newInvoice;
  }
}
