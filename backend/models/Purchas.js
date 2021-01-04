const { Schema, model } = require('mongoose');

const PurchasesNewSchema = new Schema({
    code: {type: String, required:true},
    product: {type: String, required:true},
    cant: {type: Number, required:true},
    email: {type: String, required:true},
    description:{type: String, required:true},
    created_at:{type:Date, default: Date.now}
});

module.exports = model('Purchas',PurchasesNewSchema)