const express = require('express');
const router = express.Router();

// Import Question model
const Store = require('../../../models/Store');

// @ GET /api/admin/questions
// Return all questions
router.get('/', (req, res) => {
	Store.find({}, (err, foundStores) => {
		if (err) throw err;

		res.status(200).send(foundStores);
	});
});

// @ POST /api/admin/stores
// Add new store
router.post('/', (req, res) => {
	const { number, city, address } = req.body;
    const newStore = new Store({ number, city, address });
    // console.log(number, city, address);

	newStore.save((err, savedStore) => {
		if (!err) {
            console.log(savedStore);
			res.status(200).send(savedStore);
		} else {
			res.status(400).send(err);
		}
	});
});

module.exports = router;
