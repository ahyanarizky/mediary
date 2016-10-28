var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var insSchema = mongoose.Schema({
  IID: String,
  name: String,
  address: String,
  category: String,
  username: String,
  password: String
 });

insSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('institution', insSchema);
