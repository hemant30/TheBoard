(function (person) { 

    var mongoose = require("mongoose");

    var personschema = new mongoose.Schema({
        name : {
            first : { type: String, trim: true, required: true },
            last : { type: String, trim: true, required: true }
        },
        dob : { type : Date, default: Date.now },
        gender: {type: String, enum : ["male", "female"]}
    });

    person.model = mongoose.model('person', personschema);



})(module.exports);