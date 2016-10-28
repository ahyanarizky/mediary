let viewAllPatient = (req, res, next) => {
  res.send('viewAllPatient')
}

let formAddPatient = (req, res, next) => {
  res.render('formAddPatient', {title: "mediary"})
}

let processAddPatient = (req, res, next) => {
  res.redirect('/dashboard/patient')
}

let formEditPatient = (req, res, next) => {
  res.render('formEditPatient', {title: "mediary"})
}

let processEditPatient = (req, res, next) => {
  Model.update({
    _id: req.params.id
  }, (err, data))
}

let processDeletePatient = (req, res, next) => {
  res.send('processDeletePatient')
}

module.exports = {
  viewAllPatient: viewAllPatient,
  formAddPatient: formAddPatient,
  processAddPatient: processAddPatient,
  formEditPatient: formEditPatient,
  processEditPatient: processEditPatient,
  processDeletePatient: processDeletePatient
}
