let ModelRecord = require('../models/record.js')

let viewAllRecord = (req, res, next) => {
  ModelRecord.find({}, (err, records) => {
    if(err){
      console.log(err);
    }else{
      res.render('viewAllRecord', {title: "mediary", records: records})
    }
  })
}

let formAddRecord = (req, res, next) => {
  res.render('formAddPatient', {title: "mediary"})
}

let processAddRecord = (req, res, next) => {
  ModelRecord.create(req.body, (err, record) => {
    if(err){
      console.log(err);
    }else{
      res.redirect('/dashboard/patient/record')
    }
  })
}

let formEditRecord = (req, res, next) => {
  res.render('formEditRecord', {title: "mediary"})
}

let processEditRecord = (req, res, next) => {
  ModelRecord.update({
    _id: req.params.id
  }, req.body, (err, recordUpdated) => {
    if(err){
      console.log(err);
    }else{
      console.log(`Data has been updated`);
      res.redirect('/dashboard/patient/record')
    }
  })
}

let processDeleteRecord = (req, res, next) => {
  ModelRecord.findById(req.params.id, (err, recordDeleted) => {
    if(err){
      console.log(err);
    }else{
      console.log(`Data has been deleted`);
      res.redirect('/dashboard/patient/record')
    }
  })
}

module.exports = {
  viewAllRecord: viewAllRecord,
  formAddRecord: formAddRecord,
  processAddRecord: processAddRecord,
  formEditRecord: formEditRecord,
  processEditRecord: processEditRecord,
  processDeleteRecord: processDeleteRecord
}
