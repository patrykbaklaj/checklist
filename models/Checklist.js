const mongoose = require('mongoose');
const Category = require('./Category');

const checklistSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},

	categories: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category'
		}
	]
});

module.exports = Checklist = mongoose.model('Checklist', checklistSchema);
