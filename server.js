const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const bodyParser = require('body-parser');
const app = express();

// App config
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// get db URI
const db = config.get('mongoURI');

// connect to mongoDB
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true }, err => {
    if (err) throw err;
    console.log('Successfuly connected to mongoDB :)');
});

// Use routes
app.use('/api/admin/questions', require('./routes/api/admin/questions'));
app.use('/api/admin/categories', require('./routes/api/admin/categories'));

// Set port
const port = process.env.port || 5001;

app.listen(port, () => console.log(`Server started on port ${port}`));
