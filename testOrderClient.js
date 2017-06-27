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
var Product = require('./models/product');
var Client = require('./models/client');
var Order = require('./models/order');





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



var ord1 = new Order({
    date     : 12-12-2017,
    delivery : "Zambilelor nr. 24",
    payment  : 1000,
    products : [
        prod1._id,
        prod2._id
    ]
});

var client1 = new Client({
    firstname: "Joe",
    lastname : "Doe",
    email    : "Joe@gmail.com",
    orders   : ord1._id
});


//conexiunea
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var mongodbUri = 'mongodb://localhost/local';

mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {



    prod1.save().then(function (result) {
        console.log("Product ", result)
    });


    prod2.save().then(function(result){
        console.log("Product2", result)
    });


    ord1.save().then(function(result){
        console.log("Order1: ", result)
    });

    client1.save().then(function(result){
        console.log("Client:", result)
    });



    Order
        .findOne({delivery:'Zambilelor nr. 24'})
        .populate('products');

    Client
        .findOne({firstname:'joe'})
        .populate('orders')
        .exec(function(err,client1){
            if(err) handleError(err)
            console.log('The order contain this products: %s', prod1._id, prod2._id)
        });


});


return false











