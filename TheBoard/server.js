var http = require('http');

var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;


app.configure = function () { 
    //app.use(express.bodyParser().json());
};

var controllers = require('./controller/index.js');
controllers.init(app, cors);

var server = http.createServer(app);

var uristring = "mongodb://localhost/HelloMongoose;"
mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
});

//var userSchema = new mongoose.Schema({
//    name: {
//        first: String,
//        last: { type: String, trim: true }
//    },
//    age: { type: Number, min: 0 }
//});


var o = require("./model/person.js").model;

var no = new o({
    name : { first : "Hemant1", last : "Athavale1" },
    gender : "male"
});

no.save(function (err) {
    if(err) {
        console.log("Error on save");
    }
});
//var PUser = mongoose.model('PowerUsers', userSchema);

//// Creating one user.
//var johndoe = new PUser({
//    name: { first: 'John', last: '  Doe   ' },
//    age: 25
//});

//// Saving it to the database.
//johndoe.save(function (err) { if (err) console.log('Error on save!') });

server.listen(port, function () {
    console.log('Listening on port ' + port);
});