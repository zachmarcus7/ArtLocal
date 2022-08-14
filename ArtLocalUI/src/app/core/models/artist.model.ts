export class Artist {
    artistId: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
    phoneNumber: string;
    description: string;

    constructor() {        
        this.artistId = "00000000-0000-0000-0000-000000000000";
        this.firstName = "";
        this.lastName = "";
        this.address = "";
        this.city = "";
        this.state = "";
        this.postalCode = 0;
        this.country = "";
        this.phoneNumber = "";
        this.description = "";
    }
}