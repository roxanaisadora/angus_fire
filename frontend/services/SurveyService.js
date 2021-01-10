class SurveyService {

    constructor() {
        this.URI = `/api/survey`;
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