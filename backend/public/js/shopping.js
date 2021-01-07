import PurchasService from '../services/PurchasService.js';

document.getElementById("myBtn")
    .addEventListener("click", () =>{
        const product = "a"
        const code = "a"
        const email = "a"
        const description = "a"
        const cant = 1

        const formData = new FormData();
        formData.append('product',product);
        formData.append('code',code);
        formData.append('cant',cant);
        formData.append('email',email);
        formData.append('description',description);

        const purchasService = new PurchasService()
        purchasService.postPurchas(formData)

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'purchase made',
          showConfirmButton: false,
          timer: 1500
        })
    }); 