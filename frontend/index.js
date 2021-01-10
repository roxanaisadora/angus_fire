require('./style/index.css')
require('./icons/delivery_fast.png')
require('./icons/guitarra.png')
require('./icons/logo.png')
require('./icons/material.png')
require('./icons/quality.png')
import SurveyService from './services/SurveyService.js'

document.getElementById('survey-form')
    .addEventListener('submit', e => {
          const name = document.getElementById('name').value;
          const age = document.getElementById('number').value;
          const email = document.getElementById('email').value;
          const comments = document.getElementById('comments').value;

          console.log(name,age,email,comments)

          const formData = new FormData();
            formData.append('name', name);
            formData.append('age', age);
            formData.append('email', email);
            formData.append('comments', comments);

          const surveyService = new SurveyService()
          surveyService.postSurvey(formData)
          e.preventDefault();
          
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'submitted form',
            showConfirmButton: false,
            timer: 1500
        })
    })