import { Component, OnInit } from '@angular/core';
import { Artwork, ApiService, Artstyle, Artist, Gallery, FileUpload } from 'src/app/core';

@Component({
  selector: 'app-admin-artwork-new',
  templateUrl: './admin-artwork-new.component.html',
  styleUrls: ['./admin-artwork-new.component.css']
})
export class AdminArtworkNewComponent implements OnInit {

  artworks: Artwork[];
  artwork: Artwork;
  artists: Artist[];
  galleries: Gallery[];
  artstyles: Artstyle[];
  selectedFile: File | null;

  constructor(private apiService: ApiService) { 
    // create empty objects to store data in
    this.selectedFile = null;
    this.artworks = [];
    this.artists = [];
    this.galleries = [];
    this.artstyles = [];
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

  changeArtist(event: any) {
    this.artwork.artistId = event.target.value;
  }

  changeGallery(event: any) {
    this.artwork.galleryId = event.target.value;
  }
  
  changeArtstyle(event: any) {
    this.artwork.artStyleId = event.target.value;
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

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onSubmit() {
    // first, need to convert file into form data
    const fileData = new FormData();
    if (this.selectedFile != null) {
      fileData.append('image', this.selectedFile, this.selectedFile.name);
    }

    // second, need to send the form data to the api
    this.apiService.sendFile(fileData)
    .subscribe(
      response => {
        // the api sends back the url address of the hosted image
        this.artwork.imageLocation = response
      }
    )

    console.log(this.artwork);

    this.apiService.createArtwork(this.artwork)
    .subscribe( 
      response => {
        // once we get a response, clear out the forms
        this.clearForm();
      }
    ) 
  }

}
