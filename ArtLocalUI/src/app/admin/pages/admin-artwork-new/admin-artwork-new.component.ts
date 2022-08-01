import { Component, OnInit } from '@angular/core';
import { Artwork, ApiService, Artstyle, Artist, Gallery } from 'src/app/core';
import { switchMap } from 'rxjs/operators';

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
    this.artwork = new Artwork();
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
  }

  onSubmit() {
    // first, need to convert file into form data
    const fileData = new FormData();
    if (this.selectedFile != null) 
      fileData.append('image', this.selectedFile, this.selectedFile.name);
    
    // then, need to send the file to the FileUpload endpoint
    // then wait for the image location url to be sent back
    // once it is, can then send the updated artwork object
    this.apiService.sendFile(fileData)
    .pipe(
      switchMap(result => {
        this.artwork.imageLocation = result
        return this.apiService.createArtwork(this.artwork)
      })
    )
    .subscribe(results => {
      this.clearForm();
    })
  }

}

