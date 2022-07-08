import { Component, OnInit } from '@angular/core';
import { Invoice, ApiService } from 'src/app/core';

@Component({
  selector: 'app-admin-invoice-edit',
  templateUrl: './admin-invoice-edit.component.html',
  styleUrls: ['./admin-invoice-edit.component.css']
})
export class AdminInvoiceEditComponent implements OnInit {

  invoices: Invoice[];
  invoice: Invoice;

  constructor(private apiService: ApiService) { 

    // create empty objects to store data in
    this.invoices = [];
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
  }

  getAllRecords() {
    this.apiService.getAllInvoices()
    .subscribe( 
      response => (
        this.invoices = response
      )
    );
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

  populateForm(invoice: Invoice) {
    // this will work with the two way binding we set up
    // so that the form will populate with the record details
    // when that record is clicked on the right
    this.invoice = invoice;
  }

}
