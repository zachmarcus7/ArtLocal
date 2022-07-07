import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Artwork, Artist, Customer, Invoice } from '../models';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    baseUrl: string = 'https://localhost:7195/api/';
    artworkUrl: string = this.baseUrl + 'Artworks';
    artistUrl: string = this.baseUrl + 'Artists';
    customerUrl: string = this.baseUrl + 'Customers';
    invoiceUrl: string = this.baseUrl + 'Invoices';


    constructor(private http: HttpClient) {}

    // Get all Artwork
    getAllArtwork(): Observable<Artwork[]> {
        return this.http.get<Artwork[]>(this.artworkUrl);
    }

    // Get a specific Artwork
    getArtwork(artworkId: string): Observable<Artwork> {
        return this.http.get<Artwork>(this.artworkUrl + "/" + artworkId)
    }

    // Update a specific Artwork's sold property
    updateArtwork(artworkId: string, updatedArtwork: Artwork): Observable<Artwork> {
        return this.http.put<Artwork>(this.artworkUrl + "/" + artworkId, updatedArtwork);
    }

    // Get a specific Artist
    getArtist(artistId: string): Observable<Artist> {
        return this.http.get<Artist>(this.artistUrl + "/" + artistId)
    }

    // Create a new Customer
    createCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.customerUrl, customer);
    }

    // Create a new Invoice
    createInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post<Invoice>(this.invoiceUrl, invoice);
    }

    // Authenticate a customer's login                                      
    authenticateCustomer(customer: Customer): Observable<HttpResponse<Customer>> {
        return this.http.post<Customer>(this.customerUrl + "/Authentication", customer, {observe: 'response'});
    }

}