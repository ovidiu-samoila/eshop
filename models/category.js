
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CategorySchema   = new Schema({
    namecat: String,
    description: String,
    products: [{type: Schema.Types.ObjectId, ref: 'Product'}]
});

  var Product =  module.exports = mongoose.model('Category', CategorySchema);
