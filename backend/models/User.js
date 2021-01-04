const { Schema, model } = require('mongoose');

const usersNewSchema = new Schema({
    email: {type: String, required:true},
    name: {type: String, required:true},
    password:{type: String, required:true},
    created_at:{type:Date, default: Date.now}
});

module.exports = model('User',usersNewSchema)