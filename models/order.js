
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var OrderSchema   = new Schema({
    date: Date,
    delivery: String,
    payment: String,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
    client: [{type: Schema.Types.ObjectId, ref: 'Client'}]
});

module.exports = mongoose.model('Order', OrderSchema);
