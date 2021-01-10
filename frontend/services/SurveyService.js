class SurveyService {
    constructor() {
        this.URI = `http://localhost:3000/api/survey`;
    }
    
    async getSurveys() {
        const response = await fetch(this.URI);    
        const surveys = await response.json();
        return surveys;
    }
    async postSurvey(survey) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: survey
        });
        const data = await res.json();
        console.log(data);
    }

}

export default SurveyService;