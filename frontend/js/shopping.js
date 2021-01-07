(async () => {
    const{value:name} = await Swal.fire({
    title: 'Bienvenido !!!',
    input: 'text',
    inputLabel: 'Your firts name',
    inputPlaceholder: 'Enter your firts name'
});
document.getElementById('confirmation').innerHTML = `Welcome, ${name} nice to have you here 😊`;
})()