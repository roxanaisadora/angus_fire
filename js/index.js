(async () => {
        const{value:name} = await Swal.fire({
        title: 'Bienvenido !!!',
        input: 'text',
        inputLabel: 'Your firts name',
        inputPlaceholder: 'Enter your firts name'
    });
    var elem = document.getElementById('secondary').innerHTML = `Welcome, ${name} nice to have you here 😊`;
})()






