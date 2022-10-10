const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name: {type: String, required: true, max: 12},
    lastname: {type: String, required: true, max: 12},
    birthdate: {type: String, required: true, max: 10},
    genere: {type: String, required: true, max: 9},
    crm: {type: String, required: true, max: 12},
    password: {type: String, required: true, max: 12},
});

module.exports = mongoose.model('User', UserSchema);