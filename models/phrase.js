var mongoose = require('mongoose'),
   Schema = mongoose.Schema;

var PhraseSchema = new Schema({
 term: String,
 definition: String
});

var Phrase = mongoose.model('Phrase', PhraseSchema);

module.exports = Phrase;

var db = require('./models');

