import PurchasService from '../services/PurchasService.js';

document.getElementById("myBtn")
    .addEventListener("click", () =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "you want to make the purchase!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
        }).then((result) => {
          if (result.isConfirmed) {
            (async () => {
              const{value:email} = await Swal.fire({
                title: 'Input email address',
                input: 'email',
                inputLabel: 'Your email address',
                inputPlaceholder: 'Enter your email address'
              });
              if (email) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your purchase has been made.',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
              const product = "Stratocaster"
              const code = "LOJMN23641"
              const description = "The American Ultra series of guitars and basses is the most advanced for demanding musicians who demand the ultimate in precision."
              const cant = 1
              const imagePath = "https://www.musik-produktiv.es/pic-010107419xxl/fender-custom-shop-masterbuilt-59-stratocaster.jpg"

              const formData = new FormData();
              formData.append('product',product);
              formData.append('code',code);
              formData.append('cant',cant);
              formData.append('email',email);
              formData.append('description',description);
              formData.append('imagePath',imagePath);

              const purchasService = new PurchasService()
              purchasService.postPurchas(formData)
            })()
          }
        })
    }); 
document.getElementById("myBtn_1")
.addEventListener("click", () =>{
  Swal.fire({
    title: 'Are you sure?',
    text: "you want to make the purchase!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes!'
    }).then((result) => {
      if (result.isConfirmed) {
        (async () => {
          const{value:email} = await Swal.fire({
            title: 'Input email address',
            input: 'email',
            inputLabel: 'Your email address',
            inputPlaceholder: 'Enter your email address'
          });
          if (email) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your purchase has been made.',
              showConfirmButton: false,
              timer: 1500
            })
          }
          const product = "Telecaster"
          const code = "JDMJK36415"
          const description = "The Fender Telecaster is a world famous solid body electric guitar, called THE TABLE in its early days."
          const cant = 1
          const imagePath = "https://www.tomleemusic.ca/media/catalog/product/cache/image/1000x1320/e9c3970ab036de70892d86c6d221abfe/2/1/212026.png"

          const formData = new FormData();
          formData.append('product',product);
          formData.append('code',code);
          formData.append('cant',cant);
          formData.append('email',email);
          formData.append('description',description);
          formData.append('imagePath',imagePath);

          const purchasService = new PurchasService()
          purchasService.postPurchas(formData)
        })()
      }
    })
}); 
document.getElementById("myBtn_2")
    .addEventListener("click", () =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "you want to make the purchase!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
        }).then((result) => {
          if (result.isConfirmed) {
            (async () => {
              const{value:email} = await Swal.fire({
                title: 'Input email address',
                input: 'email',
                inputLabel: 'Your email address',
                inputPlaceholder: 'Enter your email address'
              });
              if (email) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your purchase has been made.',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
              const product = "Superstrat"
              const code = "PALDO6952"
              const description = "Superstrat is the name given to a type of electric guitar that resembles a Fender Stratocaster in design but with clearly distinguishable differences from a standard Stratocaster."
              const cant = 1
              const imagePath = "https://images-na.ssl-images-amazon.com/images/I/71TFu4WSHML._AC_SL1500_.jpg"

              const formData = new FormData();
              formData.append('product',product);
              formData.append('code',code);
              formData.append('cant',cant);
              formData.append('email',email);
              formData.append('description',description);
              formData.append('imagePath',imagePath);

              const purchasService = new PurchasService()
              purchasService.postPurchas(formData)
            })()
          }
        })
    }); 
document.getElementById("myBtn_3")
    .addEventListener("click", () =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "you want to make the purchase!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
        }).then((result) => {
          if (result.isConfirmed) {
            (async () => {
              const{value:email} = await Swal.fire({
                title: 'Input email address',
                input: 'email',
                inputLabel: 'Your email address',
                inputPlaceholder: 'Enter your email address'
              });
              if (email) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your purchase has been made.',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
              const product = "Semi-acoustic"
              const code = "KDUSL25689"
              const description = " Is a type of electric guitar that originates from the 1930s. It has both a sound box and one or more electric pickups."
              const cant = 1
              const imagePath = "https://d1aeri3ty3izns.cloudfront.net/media/38/383117/1200/preview.jpg"

              const formData = new FormData();
              formData.append('product',product);
              formData.append('code',code);
              formData.append('cant',cant);
              formData.append('email',email);
              formData.append('description',description);
              formData.append('imagePath',imagePath);

              const purchasService = new PurchasService()
              purchasService.postPurchas(formData)
            })()
          }
        })
    }); 
    document.getElementById("myBtn_4")
    .addEventListener("click", () =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "you want to make the purchase!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
        }).then((result) => {
          if (result.isConfirmed) {
            (async () => {
              const{value:email} = await Swal.fire({
                title: 'Input email address',
                input: 'email',
                inputLabel: 'Your email address',
                inputPlaceholder: 'Enter your email address'
              });
              if (email) {
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your purchase has been made.',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
              const product = "CONCERT GUITAR"
              const code = "JCMSO96324"
              const description = "This Flying V carries heritage to new heights. The Antique Natural finish, mahogany body and slim taper neck with rosewood fingerboard provide classic looks, sound and playability.."
              const cant = 1
              const imagePath = "https://www.audiomusica.com.pe/pub/media/catalog/product/2/0/205213_guitarra-electrica-freeman-flying-v-frfv300-color-negro.jpg"

              const formData = new FormData();
              formData.append('product',product);
              formData.append('code',code);
              formData.append('cant',cant);
              formData.append('email',email);
              formData.append('description',description);
              formData.append('imagePath',imagePath);

              const purchasService = new PurchasService()
              purchasService.postPurchas(formData)
            })()
          }
        })
    }); 
