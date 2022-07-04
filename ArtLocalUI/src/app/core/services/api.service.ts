import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artwork, Artist } from '../models';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    artworkUrl: string = 'https://localhost:7195/api/Artworks';
    artistUrl: string = 'https://localhost:7195/api/Artists';

    constructor(private http: HttpClient) {}

    // Get all Artwork
    getAllArtwork(): Observable<Artwork[]> {
        return this.http.get<Artwork[]>(this.artworkUrl);
    }

    // Get a specific Artwork
    getArtwork(artworkId: string): Observable<Artwork> {
        return this.http.get<Artwork>(this.artworkUrl + "/" + artworkId)
    }

    // Get a specific Artist
    getArtist(artistId: string): Observable<Artist> {
        return this.http.get<Artist>(this.artistUrl + "/" + artistId)
    }

}