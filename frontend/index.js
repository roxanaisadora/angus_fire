import SurveyService from './services/SurveyService'


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

         const surveyService = new SurveyService()
         surveyService.postSurvey(formData)

         e.preventDefault();
    })