
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
    book: {type: String, required: true, max: 100},
    version: {type: String, required: true, max: 100}
});

// export the model
module.exports = mongoose.model('Book', BookSchema);
