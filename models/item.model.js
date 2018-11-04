const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
    name: {type: String, required: true, max: 100},
    price: {type: String, required: true, max: 100},
    in_stock: {type: Boolean, required: true}
});

// export the model
module.exports = mongoose.model('Item', ItemSchema);
