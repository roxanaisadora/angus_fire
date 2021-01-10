class SurveyService {

    constructor() {
        this.URI = `/api/survey`;
    }

    async getSurvey() {
        const response = await fetch(this.URI);    
        const survey = await response.json();
        return survey;
    }

    async postSurvey(survey) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: survey
        });
        const data = await res.json();
        console.log(data);
    }

    async deleteSurvey(surveyId) {
        const res = await fetch(`${this.URI}/${surveyId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'Delete'
        });
        const data = await res.json();
        console.log(data);
    }

}

export default SurveyService;