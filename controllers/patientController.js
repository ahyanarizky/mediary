let ModelPatient = require('../models/patient.js')

let viewAllPatient = (req, res, next) => {
  ModelPatient.find({}, (err, patients) => {
    if(err){
      console.log(err);
    }else{
      res.render('dashboard/patients', {title: "mediary", patients: patients})
    }
  })
}

let formAddPatient = (req, res, next) => {
  res.render('dashboard/new_patient', {title: "mediary"})
}

let processAddPatient = (req, res, next) => {
  // console.log(req.body);
  ModelPatient.create({
    PID: req.body.PID,
    name: req.body.name,
    birthdate: req.body.birthdate,
    address: req.body.address,
    phone: req.body.phone,
    BloodType: req.body.BloodType
  }, (err, record) => {
    if(err){
      console.log(err);
      // res.redirect('/dashboard/patient')
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
