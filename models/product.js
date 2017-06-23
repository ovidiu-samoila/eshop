
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ProductSchema   = new Schema({
    _creator : { type: Schema.ObjectId, ref: 'Category' },
    _order : { type: Schema.ObjectId, ref: 'Order' },
    title: String,
    category: String,
    price:Number,
    description:String
});


module.exports = mongoose.model('Product', ProductSchema);
