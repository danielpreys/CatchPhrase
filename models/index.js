var db = require('./models');

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/catchphrase");

module.exports.Phrase = require("./phrase");