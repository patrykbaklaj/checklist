const mongoose = require('mongoose');

const storesSchema = new mongoose.Schema({
	number: {
		type: Number,
		required: true,
		unique: true
	},
	city: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	}
});

module.exports = Store = mongoose.model('Store', storesSchema);
