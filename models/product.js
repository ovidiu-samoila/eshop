
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema   = new Schema({
    category : { type: Schema.ObjectId, ref: 'Category' },
    _order : { type: Schema.ObjectId, ref: 'Order' },
    title: { type: String, maxlength: 20 },
    price: { type: Number, min: 100, max: 2000, required: true },
    description:String
});


module.exports = mongoose.model('Product', ProductSchema);
