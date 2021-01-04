function confirmar() {
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
          document.getElementById('confirm').innerHTML = `Welcome, ${email}`;
        })()
      }
    })
  }