export class Gallery {
    galleryId: string;
    name: string;
    address: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
    phoneNumber: string;

    constructor() {
        this.galleryId = "00000000-0000-0000-0000-000000000000";
        this.name = "";
        this.address = "";
        this.city = "";
        this.state = "";
        this.postalCode = 0;
        this.country = "";
        this.phoneNumber = "";
    }
}