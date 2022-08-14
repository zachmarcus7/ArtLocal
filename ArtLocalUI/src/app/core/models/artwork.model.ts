export class Artwork {
    artworkId: string;
    artistId: string;
    title: string;
    description: string;
    dateCreated: string;
    price: number;
    imageLocation: string;
    sold: boolean;
    galleryId: string;
    artStyleId: string;

    constructor() {
        this.artworkId = "00000000-0000-0000-0000-000000000000";
        this.artistId = "00000000-0000-0000-0000-000000000000";
        this.title = "";
        this.description = "";
        this.dateCreated = "";
        this.price = 0;
        this.imageLocation = "";
        this.sold = false;
        this.galleryId = "00000000-0000-0000-0000-000000000000";
        this.artStyleId = "00000000-0000-0000-0000-000000000000";
    }
}