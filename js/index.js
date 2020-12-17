(async () => {
        const{value:name} = await Swal.fire({
        title: 'Bienvenido !!!',
        input: 'text',
        inputLabel: 'Your firts name',
        inputPlaceholder: 'Enter your firts name'
    });
    var elem = document.getElementById('secondary').innerHTML = `Welcome, ${name} nice to have you here 😊`;
})()

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
        Swal.fire(
        'Excellent!',
        'Your purchase has been made.',
        'success'
        )
    }
    })
}





