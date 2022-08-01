import { Component, OnInit } from '@angular/core';
import { Artwork, ApiService, Artstyle, Artist, Gallery } from 'src/app/core';

@Component({
  selector: 'app-admin-artwork-existing',
  templateUrl: './admin-artwork-existing.component.html',
  styleUrls: ['./admin-artwork-existing.component.css']
})
export class AdminArtworkExistingComponent implements OnInit {

  artworks: Artwork[];
  artwork: Artwork;
  artists: Artist[];
  galleries: Gallery[];
  artStyles: Artstyle[];

  constructor(private apiService: ApiService) { 
    // create empty objects to store data in
    this.artworks = [];
    this.artists = [];
    this.galleries = [];
    this.artStyles = [];
    this.artwork = new Artwork();
  }

  ngOnInit(): void {
    this.getAllRecords();
    this.getAllArtists();
    this.getAllGalleries();
    this.getAllArtstyles();
  }

  getAllRecords() {
    this.apiService.getAllArtwork()
    .subscribe( 
      response => (
        this.artworks = response
      )
    );
  }

  getAllArtists() {
    this.apiService.getAllArtists()
    .subscribe(
      response =>
        this.artists = response
    )
  }

  getAllGalleries() {
    this.apiService.getAllGalleries()
    .subscribe(
      response =>
        this.galleries = response
    )
  }

  getAllArtstyles() {
    this.apiService.getAllArtstyles()
    .subscribe(
      response =>
        this.artStyles = response
    )
  }

  clearForm() {
    this.getAllRecords(); 
    this.artwork = new Artwork();
  }

  getMatchingArtist(artistId: string): string {
    for (var i = 0; i < this.artists.length; i++) {
      if (this.artists[i].artistId === artistId) 
        return (`${this.artists[i].firstName} ${this.artists[i].lastName}`);
    }
    return "Not Found";
  }

  getMatchingArtStyle(artStyleId: string) {
    for (var i = 0; i < this.artStyles.length; i++) {
      if (this.artStyles[i].artStyleId === artStyleId)
        return (`${this.artStyles[i].style}`);
    }
    return "Not Found";
  }

  getMatchingGallery(galleryId: string) {
    for (var i = 0; i < this.galleries.length; i++) {
      if (this.galleries[i].galleryId === galleryId) 
        return (`${this.galleries[i].name}`);
    }
    return "Not Found";
  }

  populateForm(artwork: Artwork) {
    // first, empty out current form
    this.clearForm();

    // then, create a new artwork object to copy values into
    var newArtwork = artwork;

    // then, need to update the values that have id's
    newArtwork.artistId = this.getMatchingArtist(artwork.artistId);
    newArtwork.artStyleId = this.getMatchingArtStyle(artwork.artStyleId);
    newArtwork.galleryId = this.getMatchingGallery(artwork.galleryId);

    this.artwork = newArtwork;
  }

}
