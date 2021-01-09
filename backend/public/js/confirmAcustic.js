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
              const product = "JUMBO GUITAR"
              const code = "FKSLF25965"
              const description = "A mahogany back and sides and sitka spruce top are paired with a low-profile neck and a Sigma pickup system. The bigger body and tonewood selection help to project a well-balanced sound, with impressive detail and excellent clarity."
              const cant = 1
              const imagePath = "https://www.audiomusica.com.pe/pub/media/catalog/product/1/1/1100115_guitarra-electroacustica-takamine-jumbo-gj72ce-color-natural-nat.jpg"

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
          const product = "DREADNOUGHT GUITAR"
          const code = "DKLSD36529"
          const description = "High-quality materials and clever design result in a reliable, well-balanced guitar. The Sitka Spruce body and Mahogany neck, back and sides combine to produce a rich, punchy and warm tone."
          const cant = 1
          const imagePath = "https://www.guitarfromspain.com/6957-large_default/alhambra-dreadnought-model-acoustic-guitar.jpg"

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
              const product = "AUDITORIUM GUITAR"
              const code = "LNHDJ25842"
              const description = "The larger sized Dreadnought guitar is popular for flatpicking and strumming and the Grand Concert is usually more for the fingerstylist. The Grand Auditorium delivers on both."
              const cant = 1
              const imagePath = "https://www.woodbrass.com/images/SQUARE400/woodbrass/TAYLOR+314CE+V+CLASS+2018.JPG"

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
              const product = "GRAND CONCERT GUITAR"
              const code = "HJKIU23650"
              const description = "The Gypsy acoustics remain the perfect student guitars for older children or adults, and is easy on the eyes and the wallet."
              const cant = 1
              const imagePath = "https://godinguitars.com/wp-content/uploads/2020/10/49479_Multiac_Grand_Concert_Deluxe.jpg"

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
              const code = "POKAM56329"
              const description = "In the broadest scope, there are electric and acoustic guitars. Both of these types of guitars are, more or less, played the same way, but produce very different sounds and a very different experience for the player."
              const cant = 1
              const imagePath = "https://www.stars-music.com/medias/yamaha/gc22c-600-103920-rotate.jpg"

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
