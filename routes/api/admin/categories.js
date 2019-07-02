const express = require('express');
const router = express.Router();

// Import Category model
const Category = require('../../../models/Category');

// @ GET /api/admin/category
// Return all category
router.get('/', (req, res) => {
    Category.find({})
        .populate('questions')
        .exec((err, foundCategory) => {
            if (err) throw err;
            // foundCategory.forEach(category => console.log(category));
            res.status(200).send(foundCategory);
        });
});

// @ POST /api/admin/category
// Add new category
router.post('/', (req, res) => {
    console.log(req.body);
    const { name, appID, questions } = req.body;

    const newCategory = new Category({ name, appID, questions });
    console.log(newCategory);
    newCategory.save((err, savedCategory) => {
        if (!err) {
            res.status(200).send(savedCategory);
        } else {
            res.status(400).send(err);
        }
    });
});

// GET api/admin/category/:id
// Fetch category with given id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Category.findOne({ _id: id })
        .populate('questions')
        .exec((err, foundCategory) => {
            if (err) throw err;
            // foundCategory.forEach(category => console.log(category));
            res.status(200).send(foundCategory);
        });
});

// POST api/admin/category/:id
// DELETE question
// router.delete('/:id', (req, res) => {
//     const { id } = req.params;
//     Question.findOneAndDelete({ _id: id }, (err, foundQuestion) => {
//         if (err) throw err;
//         console.log(foundQuestion);
//         res.status(200).send(foundQuestion);
//     });
// });

module.exports = router;
