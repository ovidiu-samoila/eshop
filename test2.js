var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

var mongoose   = require('mongoose');
var Category = require('./models/category');
var Product = require('./models/product');


var prod1 = new Product({
    title: "myProduct",
    price: 800,
    description: "This is a description"
});


var prod2 = new Product ({
    title: "myProduct2",
    price:900,
    description: "description 2"
});


var cat1 = new Category({
    Name: "MyCategory for testing",
    description: "My Products description",
    products: [
        prod1._id,
        prod2.id
        ]
});



//conexiunea
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var mongodbUri = 'mongodb://localhost/local';

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {

    cat1.save().then(function (result) {
        console.log("Category ", result)
    });


    prod1.save().then(function (result) {
        console.log("Product ", result)
    });


    prod2.save().then(function(result){
        console.log("Product2", result)
    });



    Category
        .findOne({categoryName: 'MyCategory for testing'})
        .populate('products')


});


return false;











