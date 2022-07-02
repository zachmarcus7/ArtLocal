import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artwork } from '../models/artwork.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    artworkUrl: string = 'https://localhost:7195/api/Artworks';

    constructor(private http: HttpClient) {}

    // Get all Artwork
    getAllArtwork(): Observable<Artwork[]> {
        return this.http.get<Artwork[]>(this.artworkUrl);
    }

}