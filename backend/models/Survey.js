const { Schema, model } = require('mongoose');

const surveyNewSchema = new Schema({
    email: {type: String, required:true},
    name: {type: String, required:true},
    age:{type: Number},
    comments:{type: String, required:true},
    created_at:{type:Date, default: Date.now}
});

module.exports = model('Survey',surveyNewSchema)
