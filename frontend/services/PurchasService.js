class PurchasService {

    constructor() {
        this.URI = `/api/purchases`;
    }

    async getPurchas() {
        const response = await fetch(this.URI);    
        const purchas = await response.json();
        return purchas;
    }

    async postPurchas(purchas) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: purchas
        });
        const data = await res.json();
        console.log(data);
    }

    async deletePurchas(purchasId) {
        const res = await fetch(`${this.URI}/${purchasId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default PurchasService;