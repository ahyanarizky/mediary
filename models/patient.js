var mongoose = require('mongoose');

var patientSchema = mongoose.Schema({
  PID: Number,
  name: String,
  birthdate: String,
  address: String,
  phone: String,
  BloodType: String,
 });


module.exports = mongoose.model('patient', patientSchema);
