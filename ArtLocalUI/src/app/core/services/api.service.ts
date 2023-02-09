import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Admin, Artwork, Artist, Customer, Invoice, Artstyle, Gallery } from '../models';
import { Observable } from 'rxjs/internal/Observable';
import { environment as env } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    baseUrl: string = 'https://localhost:7195/api/';
    authUrl: string = this.baseUrl + 'Auth';
    adminUrl: string = this.baseUrl + 'Admins';
    artistUrl: string = this.baseUrl + 'Artists';
    artworkUrl: string = this.baseUrl + 'Artworks';
    customerUrl: string = this.baseUrl + 'Customers';
    invoiceUrl: string = this.baseUrl + 'Invoices';
    artstyleUrl: string = this.baseUrl + 'ArtStyles';
    galleryUrl: string = this.baseUrl + 'Galleries';
    fileUrl: string = this.baseUrl + 'FileUpload';

    constructor(private http: HttpClient) {}

    // Get all Artwork
    getAllArtwork(): Observable<Artwork[]> {
        return this.http.get<Artwork[]>(this.artworkUrl);
    }

    // Get a specific Artwork
    getArtwork(artworkId: string): Observable<Artwork> {
        return this.http.get<Artwork>(this.artworkUrl + "/" + artworkId)
    }

    // Create a new Artwork
    createArtwork(artwork: Artwork): Observable<Artwork> {
        return this.http.post<Artwork>(this.artworkUrl, artwork);
    }

    // Update a specific Artwork's sold property
    updateArtwork(artworkId: string, updatedArtwork: Artwork): Observable<Artwork> {
        return this.http.put<Artwork>(this.artworkUrl + "/" + artworkId, updatedArtwork);
    }

    // Get all the Artists
    getAllArtists(): Observable<Artist[]> {
        return this.http.get<Artist[]>(this.artistUrl);
    }

    // Get a specific Artist
    getArtist(artistId: string): Observable<Artist> {
        return this.http.get<Artist>(this.artistUrl + "/" + artistId)
    }

    // Create a new Artist
    createArtist(artist: Artist): Observable<Artist> {
        return this.http.post<Artist>(this.artistUrl, artist);
    }

    updateArtist(artistId: string, updatedArtist: Artist): Observable<Artist> {
        return this.http.put<Artist>(this.artistUrl + "/" + artistId, updatedArtist);
    }

    // Get all Customers
    getAllCustomers(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.customerUrl);
    }

    // Get a specific Customer
    getCustomer(id: string): Observable<Customer> {
        return this.http.get<Customer>(this.customerUrl + "/" + id);
    }

    // Create a new Customer
    createCustomer(customer: Customer): Observable<Customer> {
        return this.http.post<Customer>(this.customerUrl, customer);
    }

    // Update a Customer
    updateCustomer(customerId: string, updatedCustomer: Customer): Observable<Customer> {
        return this.http.put<Customer>(this.customerUrl + "/" + customerId, updatedCustomer);
    }

    // Get all Artstyles
    getAllArtstyles(): Observable<Artstyle[]> {
        return this.http.get<Artstyle[]>(this.artstyleUrl);
    }

    // Create a new Artstyle
    createArtstyle(artstyle: Artstyle): Observable<Artstyle> {
        return this.http.post<Artstyle>(this.artstyleUrl, artstyle);
    } 

    // Update an Artstyle
    updateArtstyle(artStyleId: string, updatedArtstyle: Artstyle): Observable<Artstyle> {
        return this.http.put<Artstyle>(this.artstyleUrl + "/" + artStyleId, updatedArtstyle);
    }

    // Get all Galleries
    getAllGalleries(): Observable<Gallery[]> {
        return this.http.get<Gallery[]>(this.galleryUrl);
    }

    // Create a new Gallery
    createGallery(gallery: Gallery): Observable<Gallery> {
        return this.http.post<Gallery>(this.galleryUrl, gallery);
    }

    // Update a Gallery
    updateGallery(galleryId: string, updatedGallery: Gallery): Observable<Gallery> {
        return this.http.put<Gallery>(this.galleryUrl + "/" + galleryId, updatedGallery);
    }
    
    // Create a new Invoice
    createInvoice(invoice: Invoice): Observable<Invoice> {
        return this.http.post<Invoice>(this.invoiceUrl, invoice);
    }

    // Get all the Invoices
    getAllInvoices(): Observable<Invoice[]> {
        return this.http.get<Invoice[]>(this.invoiceUrl);
    }

    // Authenticate a customer's login, this returns a JWT if successful
    authenticateCustomer(customer: Customer): Observable<any> {
        return this.http.post(this.authUrl + "/Customer", customer, {responseType: 'text'});
    }

    // Authenticate an admin's login, this returns a JWT if successful
    authenticateAdmin(admin: Admin): Observable<any> {
        return this.http.post(this.authUrl + "/Admin", admin, {responseType: 'text'});
    }

    // this is for uploading an image to the API
    sendFile(file: FormData): Observable<any> {
        return this.http.post(this.fileUrl, file, {responseType: 'text'});
    }
}
