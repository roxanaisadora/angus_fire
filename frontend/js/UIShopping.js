import PurchasService from '../services/PurchasService.js';
import SurveyService from '../services/SurveyService.js'
const surveyService = new SurveyService()
const purchasService = new PurchasService()

class UIShopping {
    async render(){
        const surveys = await surveyService.getSurvey()
        const shoppings = await purchasService.getPurchas();
        const shoppingCard = document.getElementById('purchas-cards');
        const formcards = document.getElementById('form-cards');
        document.getElementById('form-email')
                .addEventListener('submit', e => {
                    const email = document.getElementById('email').value;
                    //console.log(email)
                    e.preventDefault();
                    formcards.innerHTML = '';
                    shoppingCard.innerHTML = '';
                    shoppings.forEach((purchas) => {
                            if(email == purchas.email){
                                const div = document.createElement('div');
                                div.className = 'contend';
                                div.id = 'contend';
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
                            }

                    });
                    surveys.forEach((survey) => {
                            if(email == survey.email){
                                const div = document.createElement('div');
                                div.className = 'contend-1';
                                div.innerHTML = `
                                <div class="card-1">
                                        <div class="data-1">
                                            <h4>Name: ${survey.name}</h4>
                                            <h4>date: ${survey.created_at}</h4>
                                            <p>Description: ${survey.comments}</p>
                                        </div>
                                </div>
                                `;
                                formcards.appendChild(div);
                            }
                    });
                })
    }
    async deletePurchas(purchasId) {
        await purchasService.deletePurchas(purchasId)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'The purchase has been deleted',
            showConfirmButton: false,
            timer: 1500
          })
        const shoppingCard = document.getElementById('purchas-cards');
        shoppingCard.innerHTML = '';
        this.render();
        }
}


export default UIShopping;