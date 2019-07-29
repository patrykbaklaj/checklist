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

// @ PATCH api/admin/category/:id
// Update existing category
router.patch('/:id', (req, res) => {
	const { name, appID, questions, id } = req.body;

	const updatedCategory = { name, appID, questions, id };

	Category.findOneAndUpdate(
		{ _id: id },
		updatedCategory,
		{ new: true },
		(err, category) => {
			if (!err) {
				res.status(200).send(category);
			} else {
				res.status(400).send(err);
				throw err;
			}
		}
	);
});

// @ DELETE api/admin/category/:id
// Delete category with given id

// TO DELETE
// router.delete('/:id', (req, res) => {
router.delete('/:id', (req, res) => {
	const { id } = req.params;

	Category.findOneAndDelete({ _id: id }, (err, foundCategory) => {
		if (err) {
			throw err;
		} else {
			res.status(200).send(foundCategory._id);
		}
	});
});

module.exports = router;
