export class Customer {
    customerId: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    address: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
    phoneNumber: string;

    constructor(login?: boolean) {
        this.customerId = "00000000-0000-0000-0000-000000000000";
        this.firstName = login ? "first" : "";
        this.lastName = login ? "last" : "";
        this.userName = "";
        this.password = "";
        this.address = login ? "address" : "";
        this.city = login ? "city" : "";
        this.state = login ? "state" : "";
        this.postalCode = login ? 1 : 0;
        this.country = login ? "country" : "";
        this.phoneNumber = login ? "phoneNumber" : "";
    }


}