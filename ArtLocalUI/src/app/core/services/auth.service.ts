import { Injectable } from '@angular/core';
import { Admin, Customer } from '../models';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    private adminLogger = new Subject<boolean>();
    private adminLoggedIn: boolean;
    private customerLogger = new Subject<boolean>();
    private customerLoggedIn: boolean;
    private usernameLogger = new Subject<string>();
    private username: string;
    private userIdLogger = new Subject<string>();
    private userId: string;

    constructor() {
        this.adminLoggedIn = false;
        this.customerLoggedIn = false;
        this.username = "";
        this.userId = "";
    }
  
    adminLoggerObs(): Observable<boolean> {
        return this.adminLogger.asObservable();
    }

    adminLoggedInNow(): boolean {
        return this.adminLoggedIn;
    }

    customerLoggerObs(): Observable<boolean> {
        return this.customerLogger.asObservable();
    }

    customerLoggedInNow(): boolean {
        return this.customerLoggedIn;
    }
  
    adminLogIn(token: any) {
        // store the jwt
        localStorage.setItem("jwt", token);

        // if a customer is logged in, log them out
        if (this.customerLoggedIn) 
            this.customerLogOut();

        // update the local storage values
        localStorage.setItem("admin-logged-in", "true");

        // push the values so that observers can be updated
        this.adminLoggedIn = true;
        this.adminLogger.next(this.adminLoggedIn);
    }
  
    adminLogOut() {
        // remove the jwt
        localStorage.removeItem("jwt");

        // update the local storage values
        localStorage.removeItem("admin-logged-in");

        // push the values so that observers can be updated
        this.adminLoggedIn = false;
        this.adminLogger.next(this.adminLoggedIn);
    }

    customerLogIn(token: any, customer: Customer) {
        // store the jwt
        localStorage.setItem("jwt", token);

        // if an admin is logged in, log them out
        if (this.adminLoggedIn) 
            this.adminLogOut();

        // update the local storage values
        localStorage.setItem("customer-logged-in", "true");
        localStorage.setItem("customer-username", customer.userName);
        localStorage.setItem("customer-id", customer.customerId);

        // push the values so that observers can be updated
        this.customerLoggedIn = true;
        this.customerLogger.next(this.customerLoggedIn);
        this.username = customer.userName;
        this.usernameLogger.next(this.username);
    }
  
    customerLogOut() {
        // remove the jwt
        localStorage.removeItem("jwt");

        // update the local storage values
        localStorage.removeItem("customer-logged-in");
        localStorage.removeItem("customer-username");
        localStorage.removeItem("customer-id");

        // push the values so that observers can be updated
        this.customerLoggedIn = false;
        this.customerLogger.next(this.customerLoggedIn);
        this.username = "";
        this.usernameLogger.next(this.username);
    }

    getCurrentName(): Observable<string> {
        return this.usernameLogger.asObservable();
    }

    getCurrentId(): string {
        // check if there is currently an id in local storage
        let res: string | null = localStorage.getItem("customer-id");
        if (res != null) {
            return res;
        }

        // otherwise, return an empty guid
        return "00000000-0000-0000-0000-000000000000";
    }

}