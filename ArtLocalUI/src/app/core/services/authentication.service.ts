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
    private nameLogger = new Subject<string>();
    private currentName: string;
    private idLogger = new Subject<string>();
    private currentId: string;

    constructor() {
        this.loggedIn = false;
        this.currentName = "";
        this.currentId = "";
    }
  
    isLoggedIn(): Observable<boolean> {
        return this.logger.asObservable();
    }

    isLoggedInNow(): boolean {
        return this.loggedIn;
    }

    getCurrentName(): Observable<string> {
        return this.nameLogger.asObservable();
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
  
    logIn(customer: Customer) {
        // update the local storage values
        localStorage.setItem("logged-in", "true");
        localStorage.setItem("customer-firstname", customer.firstName);
        localStorage.setItem("customer-id", customer.customerId);

        // push the values so that observers can be updated
        this.loggedIn = true;
        this.logger.next(this.loggedIn);
        
        this.currentName = customer.firstName;
        this.nameLogger.next(this.currentName);
    }
  
    logOut() {
        // update the local storage values
        localStorage.removeItem("logged-in");
        localStorage.removeItem("customer-firstname");
        localStorage.removeItem("customer-id");

        // push the values so that observers can be updated
        this.loggedIn = false;
        this.logger.next(this.loggedIn);

        this.currentName = "";
        this.nameLogger.next(this.currentName);
    }
}