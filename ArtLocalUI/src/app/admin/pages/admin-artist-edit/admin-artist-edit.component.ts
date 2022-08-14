import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Artist, ApiService } from 'src/app/core';
import { AreaComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-admin-artist-edit',
  templateUrl: './admin-artist-edit.component.html',
  styleUrls: ['./admin-artist-edit.component.css']
})
export class AdminArtistEditComponent implements OnInit {

  artists: Artist[];
  artist: Artist;

  /*
  artistTest = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl(''),
    country: new FormControl(''),
    phoneNumber: new FormControl(''),
    description: new FormControl(''),
  })*/

  constructor(private apiService: ApiService) { 
    // create empty objects to store data in
    this.artists = [];
    this.artist = new Artist();
  }

  ngOnInit(): void {
    this.getAllRecords();
  }

  getAllRecords() {
    this.apiService.getAllArtists()
    .subscribe( 
      response => (
        this.artists = response
      )
    );
  }

  clearForm() {
    this.getAllRecords(); 
    this.artist = new Artist();
  }

  onSubmit() {
    // check if we're receiving a new record
    if (this.artist.artistId === "00000000-0000-0000-0000-000000000000") {
      this.apiService.createArtist(this.artist)
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
      this.updateArtist(this.artist);
    }
  }

  updateArtist(artist: Artist) {
    this.apiService.updateArtist(this.artist.artistId, artist)
    .subscribe(
      response => {
        // with the response, just refresh the list on the right
        this.getAllRecords();
      }
    )
  }

  populateForm(artist: Artist) {
    // this will work with the two way binding we set up
    // so that the form will populate with the record details
    // when that record is clicked on the right
    this.artist = artist;
  }

}
