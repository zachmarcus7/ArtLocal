import { Component, OnInit } from '@angular/core';
import { Customer, ApiService, AuthService, Invoice, Artwork } from 'src/app/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  // create objects for storing data from form
  customer: Customer;
  invoice: Invoice;
  artwork: Artwork;
  loggedIn: boolean;
  artworkId: string;


  // inject the api and authentication services into the constructor
  constructor(private router: Router, 
              private apiService: ApiService,
              private authService: AuthService,
              private route: ActivatedRoute,) { 

    // this is for checking if a current customer is logged in
    // and can actually place an order on a specific piece
    this.loggedIn = false;
    this.artworkId = "";

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
      dateBought: new Date(),
      sellPrice: 0
    }

    // as well as an empty artwork object
    this.artwork = {
      artworkId: "00000000-0000-0000-0000-000000000000",
      artistId: "00000000-0000-0000-0000-000000000000",
      title: "",
      description: "",
      dateCreated: "",
      price: 0,
      imageLocation: "",
      sold: false,
      galleryId: "00000000-0000-0000-0000-000000000000",
      artStyleId: "00000000-0000-0000-0000-000000000000",
    }
  }

  ngOnInit() {
    this.getLoggedInValue();
    this.getArtworkId();
    this.getArtwork();
  }

  // this is for keeping track if a customer is currently logged in and
  // can place an order
  getLoggedInValue() {
    this.loggedIn = this.authService.customerLoggedInNow();
  }

  getArtworkId() {
    this.route.queryParams
    .subscribe(
      params => {
        this.artworkId = params['artworkId'];
      }
    )
  }

  getArtwork() {
    this.apiService.getArtwork(this.artworkId)
    .subscribe(
      response => (
        this.artwork = response
      )
    )
  }

  updateArtwork() {
    this.apiService.updateArtwork(this.artworkId, this.artwork)
    .subscribe(
      response => {
        console.log(response)
      }
    )
  }

  createInvoice() {
    this.apiService.createInvoice(this.invoice)
    .subscribe(
      response => (
        console.log(response)
      )
    )
  }

  onSubmit(): void {
    // check if the customer is logged in
    if (this.loggedIn == true) {
      // first, update the invoice and the artwork
      this.invoice.artworkId = this.artworkId;
      this.invoice.customerId = this.authService.getCurrentId();
      this.invoice.dateBought = new Date();
      this.invoice.sellPrice = this.artwork.price;
      this.artwork.sold = true;

      // then, have the service make a call to the API to
      // update both the invoice and the artwork
      this.createInvoice();
      this.updateArtwork();
      this.router.navigate(['/']);
    } else {
      // if there's no customer logged in, redirect them to the login page
      this.router.navigate(['/login']);
    }
  }

}
