import { Injectable } from '@angular/core';
import { Admin, Customer } from '../models';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AdminAuthenticationService {
    
    private logger = new Subject<boolean>();
    private loggedIn: boolean;
    private idLogger = new Subject<string>();
    private currentId: string;

    constructor() {
        this.loggedIn = false;
        this.currentId = "";
    }
  
    isLoggedIn(): Observable<boolean> {
        return this.logger.asObservable();
    }

    isLoggedInNow(): boolean {
        return this.loggedIn;
    }
  
    logIn() {
        // update the local storage values
        localStorage.setItem("admin-logged-in", "true");

        // push the values so that observers can be updated
        this.loggedIn = true;
        this.logger.next(this.loggedIn);
    }
  
    logOut() {
        // update the local storage values
        localStorage.removeItem("admin-logged-in");

        // push the values so that observers can be updated
        this.loggedIn = false;
        this.logger.next(this.loggedIn);
    }
}