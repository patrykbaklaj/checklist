const mongoose = require('mongoose');
const Question = require('./Question');

const categoySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    appID: {
        type: String,
        required: true
    },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }]
});

module.exports = Category = mongoose.model('Category', categoySchema);
