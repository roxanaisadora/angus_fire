require('./style/index.css')
require('./icons/delivery_fast.png')
require('./icons/guitarra.png')
require('./icons/logo.png')
require('./icons/material.png')
require('./icons/quality.png')
import UI from './UI.js'

document.getElementById("confirm")
    .addEventListener("click", () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to continue with the purchase!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Completed!',
                'Your purchase has been made.',
                'success'
              )
            }
          })
    });
document.getElementById("confirm1")
    .addEventListener("click", () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to continue with the purchase!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Completed!',
                'Your purchase has been made.',
                'success'
              )
            }
          })
    });
document.getElementById("confirm2")
    .addEventListener("click", () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to continue with the purchase!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Completed!',
                'Your purchase has been made.',
                'success'
              )
            }
          })
    });
document.getElementById("confirm3")
    .addEventListener("click", () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to continue with the purchase!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Completed!',
                'Your purchase has been made.',
                'success'
              )
            }
          })
    });
document.getElementById("confirm4")
    .addEventListener("click", () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to continue with the purchase!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Completed!',
                'Your purchase has been made.',
                'success'
              )
            }
          })
    });
document.getElementById("confirm5")
    .addEventListener("click", () =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to continue with the purchase!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Completed!',
                'Your purchase has been made.',
                'success'
              )
            }
          })
    });

document.getElementById('survey-form')
    .addEventListener('submit', e => {
          const name = document.getElementById('name').value;
          const age = document.getElementById('number').value;
          const email = document.getElementById('email').value;
          const comments = document.getElementById('comments').value;

          const formData = new FormData();
          formData.append('name',name);
          formData.append('age',age);
          formData.append('email',email);
          formData.append('comments',comments);

          const ui = new UI();
          ui.addNew(formData)

          e.preventDefault();
          
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'submitted form',
            showConfirmButton: false,
            timer: 1500
        })
    })