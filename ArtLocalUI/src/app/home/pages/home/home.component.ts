import { Component, OnInit } from '@angular/core';
import { Artwork, ApiService } from 'src/app/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artworks: Artwork[] = [];

  // here, we're injecting the api service into the component
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // use the api service to get all the artwork when the page first loads
    this.getAllArtwork();
  }

  getAllArtwork() {
    this.apiService.getAllArtwork()
    .subscribe(
      response => (
        this.artworks = response
      )
    )
  }

}
