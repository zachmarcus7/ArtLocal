export class Invoice {
    invoiceId: string;
    artworkId: string;
    customerId: string;
    dateBought: Date;
    sellPrice: number;

    constructor() {
        this.invoiceId = "00000000-0000-0000-0000-000000000000";
        this.artworkId = "00000000-0000-0000-0000-000000000000";
        this.customerId = "00000000-0000-0000-0000-000000000000";
        this.dateBought = new Date();
        this.sellPrice = 0;
    }
}