const express = require('express');
const router = express.Router();

// Import Checklist model
const Checklist = require('../../../models/Checklist');

// @ GET /api/admin/checklist
// Return all checklists types
router.get('/', (req, res) => {
	Checklist.find({})
		.sort('name') // sort by store number
		.exec((err, foundChecklist) => {
			if (err) throw err;

			res.status(200).send(foundChecklist);
		});
});

// To Populate

router.get('/:id', (req, res) => {
	const id = req.params.id;
	Checklist.findById(id)
		.populate('categories')
		.exec((err, foundChecklist) => {
			if (err) throw err;

			res.status(200).send(foundChecklist);
		});
});

// ----------------------------------------- TO CHANGE -----------------------------
// @ POST /api/admin/checklist
// Add new checklist
router.post('/', (req, res) => {
	const { name, categories } = req.body;
	const newChecklist = new Checklist({ name, categories });
	console.log(newChecklist);

	newChecklist.save((err, savedChecklist) => {
		if (!err) {
			console.log(savedChecklist);
			res.status(200).send(savedChecklist);
		} else {
			res.status(400).send(err);
		}
	});
});

module.exports = router;
