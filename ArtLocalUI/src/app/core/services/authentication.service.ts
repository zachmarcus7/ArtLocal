import { Injectable } from '@angular/core';
import { Customer} from '../models';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    
    private logger = new Subject<boolean>();
    private loggedIn: boolean;

    constructor() {
        this.loggedIn = false;
    }
  
    isLoggedIn(): Observable<boolean> {
        return this.logger.asObservable();
    }
  
    logIn(customer: Customer) {
        localStorage.setItem("logged-in", "true");
        localStorage.setItem("customer-firstname", customer.firstName);
        localStorage.setItem("customer-id", customer.customerId);
        this.loggedIn = true;
        this.logger.next(this.loggedIn);
    }
  
    logOut() {
        localStorage.removeItem("logged-in");
        localStorage.removeItem("customer-firstname");
        localStorage.removeItem("customer-id");
        this.loggedIn = false;
        this.logger.next(this.loggedIn);
    }
}