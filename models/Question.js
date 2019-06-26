const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    appID: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        default: null
    }
});

module.exports = Question = mongoose.model('Question', questionSchema);
