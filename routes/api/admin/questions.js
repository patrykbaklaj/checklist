const express = require('express');
const router = express.Router();

// Import Question model
const Question = require('../../../models/Question');

// @ GET /api/admin/questions
// Return all questions
router.get('/', (req, res) => {
    Question.find({}, (err, foundQuestions) => {
        if (err) throw err;

        foundQuestions.forEach(question => console.log(question));
        res.status(200).send(foundQuestions);
    });
});

// @ POST /api/admin/questions
// Add new question
router.post('/', (req, res) => {
    const { name, points, appID, answer } = req.body;
    const newQuestion = new Question({name, points, appID, answer});

    newQuestion.save((err, savedQuestion) => {
        if (!err) {
            res.status(200).send(savedQuestion);
        } else {
            res.status(400).send(err);
        }
    });
});

// POST api/admin/questions:id
// DELETE question
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Question.findOneAndDelete({_id: id}, (err, foundQuestion) => {
        if(err) throw err;
            console.log(foundQuestion);
            res.status(200).send(foundQuestion);
    });
});

module.exports = router;
