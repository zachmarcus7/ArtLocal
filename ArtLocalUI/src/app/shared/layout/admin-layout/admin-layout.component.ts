import { Component, OnInit, HostListener, Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  adminLoggedIn: boolean;
  displayLogo: boolean;
  sidenavOpened: boolean;
  showTitles: boolean;
  minWidth: string;
  regWidth: string;
  sidenavWidth: string;
  contentMargin: number;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private authService: AuthService, private router: Router) {
    this.minWidth = "65px";
    this.regWidth = "260px";
    this.contentMargin = 260;
    this.adminLoggedIn = false;
    this.displayLogo = this.isLargeScreen() ? true : false;
    this.sidenavOpened = this.isLargeScreen() ? true : false;  
    this.showTitles = this.isLargeScreen() ? true : false;  
    this.sidenavWidth = this.isLargeScreen() ? this.regWidth : this.minWidth;
  }

  ngOnInit() {
    this.getAdminLoggedInValue();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.displayLogo = this.isLargeScreen() ? true : false;
    this.sidenavOpened = this.isLargeScreen() ? true : false;  
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 768) {
        return true;
    } else {
        return false;
    }
  }

  setSidenav() {
    if (this.isLargeScreen()) {
      this.showTitles = !this.showTitles;

      // check if the sidenav was closed and user went back to full screen
      if (!this.sidenav.opened) {
        this.sidenavWidth = this.regWidth;
        this.sidenav.toggle();
        this.showTitles = !this.showTitles;
      }
      else {
        this.sidenavWidth = this.sidenavWidth == this.regWidth ? this.minWidth : this.regWidth;
        this.contentMargin = this.contentMargin == 260 ? 65 : 260;
      }
    }
    else {
      this.sidenav.toggle();
    }
  }

  checkSidenav() {
    // this is for when a user clicks on the sidenav in full screen when it's at the min width
    if (this.sidenavWidth == this.minWidth) {
      this.showTitles = !this.showTitles;
      this.sidenavWidth = this.regWidth;
      this.contentMargin = this.contentMargin == 260 ? 65 : 260;
    }
  }

  getAdminLoggedInValue() {
    this.authService.adminLoggerObs()
    .subscribe(
      response => (
        this.adminLoggedIn = response
      )
    )
  }

  logOut() {
    this.authService.adminLogOut();
  }

}
