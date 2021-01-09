import PurchasService from '../services/PurchasService.js';
const purchasService = new PurchasService()

class UIShopping {
    async render(){
        const shoppings = await purchasService.getPurchas();
        const shoppingCard = document.getElementById('purchas-cards');
        shoppingCard.innerHTML = '';
        document.getElementById('form-email')
                .addEventListener('submit', e => {
                    const email = document.getElementById('email').value;
                    console.log(email)
                    e.preventDefault();
                    shoppings.forEach((purchas) => {
                            if(email == purchas.email){
                                const div = document.createElement('div');
                                div.className = 'contend';
                                div.innerHTML = `
                                <div class="card">
                                    <div class="col-4">
                                        <img src="${purchas.imagePath}" alt="img">
                                    </div>
                                    <div class="col-8">
                                        <div class="data">
                                            <h4>Name: ${purchas.product}</h4>
                                            <p> Code: ${purchas.code}</p>
                                            <p>Description: ${purchas.description}</p>
                                            <a href="#" class="delete" _id="${purchas._id}">X</a>
                                        </div>
                                    </div>
                                </div>
                                `;
                                shoppingCard.appendChild(div);
                            }else{
                                console.log('no te encontre')
                                const div = document.createElement('div');
                                div.className = 'contended';
                                div.innerHTML = `
                                `;
                                shoppingCard.appendChild(div);
                            }
                      });
                })
        
    }
    async deletePurchas(purchasId) {
        await purchasService.deletePurchas(purchasId)
        setTimeout("location.reload(true);",1500)
        this.render();
        }
}


export default UIShopping;