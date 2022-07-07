import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork, ApiService, Artist } from 'src/app/core';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {

  artworkId: string;
  artwork: Artwork;
  artist: Artist;
  sold: boolean;

  // here we're injecting the ActivatedRoute and ApiService services into the constructor
  constructor(private route: ActivatedRoute, private apiService: ApiService) { 
    // create empty variables while we wait
    // to get the values from the parameters
    this.artworkId = "";
    this.sold = false;

    this.artwork = {
      artworkId: "",
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

    this.artist = {
      artistId: "",
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

  ngOnInit() {
    this.getQueryParams();
  }

  // here, we're getting the artwork's id from the query parameters
  // then we're making a call to the API to get the full information
  // for the artwork as well as the artist
  getQueryParams() {
    this.route.queryParams
    .subscribe(params => {
      this.artworkId = params['artworkId'];
      this.getArtworkAndArtist();
    })
  }

  getArtworkAndArtist() {
    this.apiService.getArtwork(this.artworkId)
    .pipe(
      switchMap(result => {
        this.artwork = result;
        this.sold = this.artwork.sold;
        return this.apiService.getArtist(this.artwork.artistId)
      })
    )
    .subscribe(results => {
      this.artist = results;
    })
  }

}



