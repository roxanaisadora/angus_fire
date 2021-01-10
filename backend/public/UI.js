import SurveyService from './services/SurveyService.js'
const surveyService = new SurveyService()

class UI {
    async addNew(formData){
        await surveyService.postSurvey(formData)
        this.clearForm();
    }
    clearForm (){
        document.getElementById('survey-form').reset();
    }
}

export default UI;