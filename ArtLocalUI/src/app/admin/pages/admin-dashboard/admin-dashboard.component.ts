import { Component, OnInit } from '@angular/core';
import { Customer, ApiService, Admin } from 'src/app/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  buttonClicked: boolean;

  constructor() {
    this.buttonClicked = false;
  }

  ngOnInit(): void {
  }

  receiveMessage(msg: boolean): void {
    this.buttonClicked = !this.buttonClicked;
  }

}
