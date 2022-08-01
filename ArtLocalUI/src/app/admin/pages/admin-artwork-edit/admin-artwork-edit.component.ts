import { Component, OnInit, Inject } from '@angular/core';
import { Artwork, ApiService, Artstyle, Artist, Gallery } from 'src/app/core';

@Component({
  selector: 'app-admin-artwork-edit',
  templateUrl: './admin-artwork-edit.component.html',
  styleUrls: ['./admin-artwork-edit.component.css']
})
export class AdminArtworkEditComponent implements OnInit {

  artworks: Artwork[];
  artwork: Artwork;
  artists: Artist[];
  galleries: Gallery[];
  artstyles: Artstyle[];

  constructor(private apiService: ApiService) { 
    // create empty objects to store data in
    this.artworks = [];
    this.artists = [];
    this.galleries = [];
    this.artstyles = [];
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
        this.artstyles = response
    )
  }

  clearForm() {
    this.getAllRecords(); 
    this.artwork = new Artwork();
  }

  populateForm(artwork: Artwork) {
    this.artwork = artwork;
  }

  onSubmit() {
    this.apiService.createArtwork(this.artwork)
    .subscribe( 
      response => {
        // once we get a response, clear out the forms
        this.clearForm();
      }
    )
  }

}
