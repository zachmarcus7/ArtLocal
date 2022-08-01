import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  adminLoggedIn: boolean;
  displayLogo: boolean;
  sidenavOpened: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.adminLoggedIn = false;
    this.displayLogo = this.isLargeScreen() ? true : false;
    this.sidenavOpened = this.isLargeScreen() ? true : false;  
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
