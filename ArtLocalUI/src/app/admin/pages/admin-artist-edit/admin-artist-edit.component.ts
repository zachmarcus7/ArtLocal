import { Component, OnInit } from '@angular/core';
import { Artist, ApiService } from 'src/app/core';

@Component({
  selector: 'app-admin-artist-edit',
  templateUrl: './admin-artist-edit.component.html',
  styleUrls: ['./admin-artist-edit.component.css']
})
export class AdminArtistEditComponent implements OnInit {

  artists: Artist[];
  artist: Artist;

  constructor(private apiService: ApiService) { 

    // create empty objects to store data in
    this.artists = [];
    this.artist = {
      artistId: "00000000-0000-0000-0000-000000000000",
      firstName:"",
      lastName: "",
      address: "",
      city: "",
      state: "",
      postalCode: 0,
      country: "",
      phoneNumber: "",
      description: "",
    };
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
    this.artist = {
      artistId: "00000000-0000-0000-0000-000000000000",
      firstName:"",
      lastName: "",
      address: "",
      city: "",
      state: "",
      postalCode: 0,
      country: "",
      phoneNumber: "",
      description: "",
    }
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
