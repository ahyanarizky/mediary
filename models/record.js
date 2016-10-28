var mongoose = require('mongoose');

var recordSchema = mongoose.Schema({
  PID: Number,
  IID: Number,
  height: String,
  weight: String,
  bloodPressure: String,
  cholesterol: String,
  glucoseLevel: String,
  uridAcid: String,
  diagnose: String,
  additionalInfo: String
 });


module.exports = mongoose.model('record', recordSchema);
