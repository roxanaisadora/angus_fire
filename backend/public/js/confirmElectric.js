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
              const description = "The American Ultra series of guitars and basses is the most advanced for demanding musicians who demand the ultimate in precision, performance and tone. The American Ultra Stratocaster features a unique MODERN D neck profile with rounded fingerboard edges for hours of comfort, and the neck heel shape allows easy access to the higher register."
              const cant = 1

              const formData = new FormData();
              formData.append('product',product);
              formData.append('code',code);
              formData.append('cant',cant);
              formData.append('email',email);
              formData.append('description',description);

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
          const description = "The Fender Telecaster is a world famous solid body electric guitar, called THE TABLE in its early days. It is characterized by the simplicity in its design and by the sound obtained from its two single coil or single coil pickups, which appear in the vast majority of its models instead of the double coil or humbuckers that later appeared in other guitars."
          const cant = 1

          const formData = new FormData();
          formData.append('product',product);
          formData.append('code',code);
          formData.append('cant',cant);
          formData.append('email',email);
          formData.append('description',description);

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
              const description = "Superstrat is the name given to a type of electric guitar that resembles a Fender Stratocaster in design but with clearly distinguishable differences from a standard Stratocaster, usually to cater for a different style of playing. Typical differences are a more pointed design, with more aggressive shapes on the body and neck, different woods, greater number of frets, use of humbucker pickups and tremolo locking systems, commonly the Floyd Rose."
              const cant = 1

              const formData = new FormData();
              formData.append('product',product);
              formData.append('code',code);
              formData.append('cant',cant);
              formData.append('email',email);
              formData.append('description',description);

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
              const description = " Is a type of electric guitar that originates from the 1930s. It has both a sound box and one or more electric pickups. This is not the same as an acoustic-electric guitar, which is an acoustic guitar with the addition of pickups or other means of amplification, added by either the manufacturer or the player."
              const cant = 1

              const formData = new FormData();
              formData.append('product',product);
              formData.append('code',code);
              formData.append('cant',cant);
              formData.append('email',email);
              formData.append('description',description);

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
              const description = "Introduced in 1958 and only made in limited quantities, the Gibson Flying V has taken flight over the years along with legions of followers. This Flying V carries heritage to new heights. The Antique Natural finish, mahogany body and slim taper neck with rosewood fingerboard provide classic looks, sound and playability. A special set of calibrated Burstbucker 2 (neck) and Burstbucker 3 (bridge) pickups provide that perfect mix of volume, tone and power."
              const cant = 1

              const formData = new FormData();
              formData.append('product',product);
              formData.append('code',code);
              formData.append('cant',cant);
              formData.append('email',email);
              formData.append('description',description);

              const purchasService = new PurchasService()
              purchasService.postPurchas(formData)
            })()
          }
        })
    }); 
