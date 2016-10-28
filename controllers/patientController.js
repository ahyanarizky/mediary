let ModelPatient = require('../models/patient.js')

let viewAllPatient = (req, res, next) => {
  if (req.user) {
    ModelPatient.find({}, (err, patients) => {
      if(err){
        console.log(err);
      }else{
        res.render('dashboard/patients', {title: "mediary", patients: patients})
      }
    })
  }else {
    res.redirect('/')
  }
}

let formAddPatient = (req, res, next) => {
  if (req.user) {
    res.render('dashboard/new_patient', {title: "mediary"})
  } else {
    res.redirect('/')
  }
}

let processAddPatient = (req, res, next) => {
  if (req.user) {
    ModelPatient.create(req.body, (err, record) => {
      if(err){
        console.log(err);
      }else{
        res.redirect('dashboard/patient')
      }
    })
  } else {
    res.redirect('/')
  }
}

let formEditPatient = (req, res, next) => {
  if (req.user) {
    res.render('./dashboard/edit_patient', {title: "mediary"})
    // res.send('edit patient')
  } else {
    res.redirect('/')
  }
}

let processEditPatient = (req, res, next) => {
  if (req.user) {
    ModelPatient.update({
      _id: req.body.id
    },{
      PID: req.body.PID,
      name: req.body.name,
      birthdate: req.body.birthdate,
      address: req.body.address,
      phone: req.body.phone,
      BloodType: req.body.BloodType
    }, (err, patientUpdated) => {
      if(err){
        console.log(err);
      }else{
        res.redirect('/')
      }
    })
  } else {
    res.redirect('/')
  }
}

let processDeletePatient = (req, res, next) => {
  if (req.user) {
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
  } else {
    res.redirect('/')
  }
}

module.exports = {
  viewAllPatient: viewAllPatient,
  formAddPatient: formAddPatient,
  processAddPatient: processAddPatient,
  formEditPatient: formEditPatient,
  processEditPatient: processEditPatient,
  processDeletePatient: processDeletePatient
}
