import { Injectable } from '@angular/core';
import { Admin, Customer } from '../models';
import { Observable } from 'rxjs/internal/Observable';
import { Subject, map, tap, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

import { ApiService } from './api.service';
import { JwtService } from './jwt.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    private _isLoggedIn = new BehaviorSubject<boolean>(false); 
    public isLoggedIn = this._isLoggedIn.asObservable();

    private _currentCustomerName = new BehaviorSubject<string>(""); // starting here
    public currentCustomerName = this._currentCustomerName.asObservable(); // observables listen here

    constructor(
        private apiService: ApiService, 
        private router: Router,
        private jwtService: JwtService
        
    ) {
        // these are important for page reloads
        const token = localStorage.getItem('jwt');
        this._isLoggedIn.next(!!token); 

        const name = localStorage.getItem('exp');
        this._currentCustomerName.next(name || "not logged in");
    }

    login(username: string, password: string): Observable<any> {
        // create a new customer for authentication
        let customer = new Customer(true);
        customer.userName = username;
        customer.password = password;

        return this.apiService.authenticateCustomer(customer).pipe(
            tap((response: any) => {
                this._isLoggedIn.next(true); // every subscriber will be notified with 'next'
                localStorage.setItem('jwt', response);

                // decode the jwt
                let decoded = this.jwtService.decodeToken(response);
                
                // set the customer name (used exp here)
                this._currentCustomerName.next(decoded['exp']);
                localStorage.setItem('exp', decoded['exp']);

            })
        );
    }

    logout() {
        localStorage.removeItem('jwt');
        window.location.reload();
    }

}

