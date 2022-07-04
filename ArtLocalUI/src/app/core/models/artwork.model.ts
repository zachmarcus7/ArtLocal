export interface Artwork {
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
}