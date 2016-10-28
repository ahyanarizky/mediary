let ModelPatient = require('../models/patient.js')

let viewAllPatient = (req, res, next) => {
<<<<<<< HEAD
  if (req.user) {
    ModelPatient.find({}, (err, patients) => {
      if(err){
        console.log(err);
      }else{
        res.render('dashboard/patients', {title: "mediary", patients: patients})
      }
    })
  } else {
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
    res.render('dashboard/edit_patient', {title: "mediary"})
  } else {
    res.redirect('/')
  }
}

let processEditPatient = (req, res, next) => {
  if (req.user) {
    ModelPatient.update({
      _id: req.params.id
    }, req.body, (err, patientUpdated) => {
      console.log(`Data has been updated`);
      if(err){
        console.log(err);
      }else{
        res.redirect('/')
      }
    })
  } else {
    res.redirect('/')
  }
=======
  ModelPatient.find({}, (err, patients) => {
    if(err){
      console.log(err);
    }else{
<<<<<<< HEAD
      res.render('dashboard/patients', {title: "mediary", patients: patients})
=======
      res.render('patients', {title: "mediary", patients: patients})
>>>>>>> fd53c407e0ad6b99075427fa8c83f897986c4767
    }
  })
}

let formAddPatient = (req, res, next) => {
<<<<<<< HEAD
  res.render('dashboard/new_patient', {title: "mediary"})
=======
  res.render('new_patient', {title: "mediary"})
>>>>>>> fd53c407e0ad6b99075427fa8c83f897986c4767
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
  ModelPatient.find({
    _id: req.params.id
  }, (err, patients) => {
    if(err){
      console.log(err);
    }else{
      console.log(`sadf`);
      res.render('dashboard/edit_patient', {title: "mediary", patients: patients, id: req.params.id})
    }
  })
}

let processEditPatient = (req, res, next) => {
  // console.log(req.body);
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
      console.log(`Data has been updated`);
      res.redirect('/dashboard/patient')
    }
  })
>>>>>>> 37493647da832c5bb9835ad760d7a261c9163abf
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
