const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

// App config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// get db URI
const db = config.get('mongoURI');

// connect to mongoDB
mongoose.connect(
    db,
    { useNewUrlParser: true, useCreateIndex: true },
    err => {
        if (err) throw err;
        console.log('Successfuly connected to mongoDB :)');
    }
);
mongoose.set('useFindAndModify', false);


// Use routes
app.use('/api/admin/questions', require('./routes/api/admin/questions'));
app.use('/api/admin/categories', require('./routes/api/admin/categories'));
app.use('/api/stores', require('./routes/api/audit/stores'));
app.use('/api/checklist', require('./routes/api/audit/checklist'));

// Set port
const port = process.env.port || 5001;

app.listen(port, () => console.log(`Server started on port ${port}`));
