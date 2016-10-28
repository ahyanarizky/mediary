let viewAllPatient = (req, res, next) => {
  res.send('viewAllPatient')
}

let formAddPatient = (req, res, next) => {
  res.send('formAddPatient')
}

let processAddPatient = (req, res, next) => {
  res.send('processAddPatient')
}

let formEditPatient = (req, res, next) => {
  res.send('formEditPatient')
}

let processEditPatient = (req, res, next) => {
  res.send('processEditPatient')
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
