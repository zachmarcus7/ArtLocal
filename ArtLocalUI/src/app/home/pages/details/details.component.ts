import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artwork, ApiService } from 'src/app/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent  {

  artworkId: string;
  artwork: Artwork;

  // here we're injecting the ActivatedRoute and ApiService services into the constructor
  constructor(private route: ActivatedRoute, private apiService: ApiService) { 
    // create empty variables while we wait
    // to get the values from the parameters
    this.artworkId = "";
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

    // here, we're getting the artwork's id from the query parameters
    // then we're making a call to the API to get the full information
    // for the artwork
    this.route.queryParams.subscribe(params => {
        this.artworkId = params['artworkId'];
        this.apiService.getArtwork(this.artworkId)
        .subscribe(
          response => (
            this.artwork = response
          )
        )
    });
  }



}



