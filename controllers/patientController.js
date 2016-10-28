let ModelPatient = require('../models/patient.js')
let ModelRecord = require('../models/record.js')

let viewAllPatient = (req, res, next) => {
  ModelPatient.find({}, (err, patients) => {
    if(err){
      console.log(err);
    }else{
      res.render('viewAllPatient', {title: "mediary", patients: patients})
    }
  })
}

let formAddPatient = (req, res, next) => {
  res.render('formAddPatient', {title: "mediary"})
}

let processAddPatient = (req, res, next) => {
  ModelRecord.create(req.body, (err, record) => {
    if(err){
      console.log(err);
    }else{
      res.redirect('/dashboard/patient')
    }
  })
}

let formEditPatient = (req, res, next) => {
  res.render('formEditPatient', {title: "mediary"})
}

let processEditPatient = (req, res, next) => {
  ModelPatient.update({
    _id: req.params.id
  }, req.body, (err, patientUpdated) => {
    console.log(`Data has been updated`);
    if(err){
      console.log(err);
    }else{
      res.redirect('processEditPatient')
    }
  })
}

let processDeletePatient = (req, res, next) => {
  ModelPatient.findById(req.params.id, (err, patientDeleted) => {
    if(err){
      console.log(err);
    }else{
      patientDeleted.remove((err, patientRemove) => {
        if(err){
          console.log(err);
        }else{
          console.log(`Data has been deleted !`);
          res.redirect('/dashboard/patient')
        }
      })
    }
  })
}

module.exports = {
  viewAllPatient: viewAllPatient,
  formAddPatient: formAddPatient,
  processAddPatient: processAddPatient,
  formEditPatient: formEditPatient,
  processEditPatient: processEditPatient,
  processDeletePatient: processDeletePatient
}
