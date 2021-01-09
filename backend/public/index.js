import UI from './UI.js'

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