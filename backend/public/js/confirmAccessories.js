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
              const product = "Guitar stand"
              const code = "JKLSO56329"
              const description = "Universal A-frame stand for acoustic and electric guitars 3 width adjustment settings to fit most guitar shapes, durable, lightweight metal construction; no assembly required, foam arms and soft backing to protect your guitar; folds flat for easy transport and storage; non-slip rubber feet."
              const cant = 1
              const imagePath = "https://d1aeri3ty3izns.cloudfront.net/media/10/102484/1200/preview_1.jpg"

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
          const product = "Guitar tuner"
          const code = "KDJFI56984"
          const description = "Fast and accurate: Spend more time playing and less time tuning. UberTuner's advanced microprocessor and highly sensitive Piezo Sensor ensure your instrument is precisely tuned in an instant. Super bright, large color display lets you easily see if it's flat, sharp, or dead-on from any angle. With 3 points of adjustment, you can position the screen any way you want - turn it on, grab it and you're ready to tune. Since the tuner detects tones directly from your instrument vibrations, the ambient noise in the room will never be interrupted."
          const cant = 1
          const imagePath = "https://ae01.alicdn.com/kf/H4424338583cd469581625f5b8d1007206.jpg"

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
              const product = "Guitar capo"
              const code = "LKSOP36578"
              const description = "Designed for easier playing. The top of the clip carries a 360 degree clamping spike mount, does not come loose. 2.1 ounce light balance design, not too heavy or too light, prevents the feeling of dropping when moving fast. Key parts of the nut are combined with high-strength thick steel and silicone springs. Carefully adjusted to ensure reliable performance and safe protection of the instrument, it features a uniform spray brushing, not only brings color shine, but also gives a comfortable grip feeling when you use it."
              const cant = 1
              const imagePath = "https://m.media-amazon.com/images/I/61bP4GoJADL._AC_UL480_FMwebp_QL65_.jpg"

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
              const product = "Amplifier"
              const code = "HJKIU23650"
              const description = "Total output power (RMS): 10 W RMS @ 4 Ohm; Speaker: 6,5. Controls: Volume, Gain, Disc; Master EQ: Treble, Middle, Bass; Jacks: input- 6.35 mono jack, headphones- 6.35 stereo jack."
              const cant = 1
              const imagePath = "https://images-na.ssl-images-amazon.com/images/I/71kehMFmCVL._AC_SL1500_.jpg"

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
              const product = "Guitar picks"
              const code = "LAKSM23678"
              const description = "Celluloid material, providing a natural feel and warm, oily tone A beautiful collection of American rock bands printed on both sides of a pick Great picks to play your guitar The best rock bands to play any type of guitar guitar.Various beautiful custom picks."
              const cant = 1
              const imagePath = "https://images-na.ssl-images-amazon.com/images/I/516-jopF10L._AC_.jpg"

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
