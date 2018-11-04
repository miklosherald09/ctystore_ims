var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

const item = require('./routes/item.route'); // Imports routes for the products

// Connect to Mongoose
let dev_db_url = "mongodb://root:miklos09@ds055709.mlab.com:55709/cty_store";
// let dev_db_url = "mongodb://localhost/cty_store";
let mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/item', item);

// let port = 81;
let port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
    console.log('Press Ctrl+C to quit.');
  });