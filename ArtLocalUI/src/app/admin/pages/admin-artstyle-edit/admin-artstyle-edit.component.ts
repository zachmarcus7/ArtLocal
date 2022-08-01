import { Component, OnInit } from '@angular/core';
import { Artstyle, ApiService } from 'src/app/core';

@Component({
  selector: 'app-admin-artstyle-edit',
  templateUrl: './admin-artstyle-edit.component.html',
  styleUrls: ['./admin-artstyle-edit.component.css']
})
export class AdminArtstyleEditComponent implements OnInit {

  artstyles: Artstyle[];
  artstyle: Artstyle;

  constructor(private apiService: ApiService) { 
    // create empty objects to store data in
    this.artstyles = [];
    this.artstyle = new Artstyle();
  }

  ngOnInit(): void {
    this.getAllRecords();
  }

  getAllRecords() {
    this.apiService.getAllArtstyles()
    .subscribe( 
      response => (
        this.artstyles = response
      )
    );
  }

  clearForm() {
    this.getAllRecords(); 
    this.artstyle = new Artstyle();
  }

  onSubmit() {
    // check if we're receiving a new record
    if (this.artstyle.artStyleId === "00000000-0000-0000-0000-000000000000") {
      this.apiService.createArtstyle(this.artstyle)
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
      this.updateArtstyle(this.artstyle);
    }
  }

  updateArtstyle(artstyle: Artstyle) {
    this.apiService.updateArtstyle(this.artstyle.artStyleId, artstyle)
    .subscribe(
      response => {
        // with the response, just refresh the list on the right
        this.getAllRecords();
      }
    )
  }

  populateForm(artstyle: Artstyle) {
    // this will work with the two way binding we set up
    // so that the form will populate with the record details
    // when that record is clicked on the right
    this.artstyle = artstyle;
  }

}
