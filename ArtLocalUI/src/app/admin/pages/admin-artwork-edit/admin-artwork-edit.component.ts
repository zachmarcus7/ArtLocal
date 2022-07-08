import { Component, OnInit } from '@angular/core';
import { Artwork, ApiService } from 'src/app/core';

@Component({
  selector: 'app-admin-artwork-edit',
  templateUrl: './admin-artwork-edit.component.html',
  styleUrls: ['./admin-artwork-edit.component.css']
})
export class AdminArtworkEditComponent implements OnInit {

  artworks: Artwork[];
  artwork: Artwork;

  constructor(private apiService: ApiService) { 

    // create empty objects to store data in
    this.artworks = [];
    this.artwork = {
      artworkId: "00000000-0000-0000-0000-000000000000",
      artistId: "",
      title: "",
      description: "",
      dateCreated: "",
      price: 0,
      imageLocation: "",
      sold: false,
      galleryId: "",
      artStyleId: ""
    }
  }

  ngOnInit(): void {
    this.getAllRecords();
  }

  getAllRecords() {
    this.apiService.getAllArtwork()
    .subscribe( 
      response => (
        this.artworks = response
      )
    );
  }

  clearForm() {
    this.getAllRecords(); 
    this.artwork = {
      artworkId: "00000000-0000-0000-0000-000000000000",
      artistId: "",
      title: "",
      description: "",
      dateCreated: "",
      price: 0,
      imageLocation: "",
      sold: false,
      galleryId: "",
      artStyleId: ""
    }
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
