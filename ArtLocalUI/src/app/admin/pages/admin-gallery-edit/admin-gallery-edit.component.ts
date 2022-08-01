import { Component, OnInit } from '@angular/core';
import { Gallery, ApiService } from 'src/app/core';

@Component({
  selector: 'app-admin-gallery-edit',
  templateUrl: './admin-gallery-edit.component.html',
  styleUrls: ['./admin-gallery-edit.component.css']
})
export class AdminGalleryEditComponent implements OnInit {

  galleries: Gallery[];
  gallery: Gallery;

  constructor(private apiService: ApiService) { 

    // create empty objects to store data in
    this.galleries = [];
    this.gallery = new Gallery();
  }

  ngOnInit(): void {
    this.getAllRecords();
  }

  getAllRecords() {
    this.apiService.getAllGalleries()
    .subscribe( 
      response => (
        this.galleries = response
      )
    );
  }

  clearForm() {
    this.getAllRecords(); 
    this.gallery = new Gallery();
  }

  onSubmit() {
    // check if we're receiving a new record
    if (this.gallery.galleryId === "00000000-0000-0000-0000-000000000000") {
      this.apiService.createGallery(this.gallery)
      .subscribe( 
        response => {
          // once we get a response, clear out the forms
          this.clearForm();
        }
      )
    }
    // otherwise, this means that we're receiving an update request
    // instead of creating a new record
    else {
      this.updateGallery(this.gallery);
    }
  }

  updateGallery(gallery: Gallery) {
    this.apiService.updateGallery(this.gallery.galleryId, gallery)
    .subscribe(
      response => {
        // with the response, just refresh the list on the right
        this.getAllRecords();
      }
    )
  }

  populateForm(gallery: Gallery) {
    // this will work with the two way binding we set up
    // so that the form will populate with the record details
    // when that record is clicked on the right
    this.gallery = gallery;
  }

}
