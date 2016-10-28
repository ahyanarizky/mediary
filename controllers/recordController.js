let viewAllRecord = (req, res, next) => {
  res.send('viewAllRecord')
}

let formAddRecord = (req, res, next) => {
  res.send('formAddRecord')
}

let processAddRecord = (req, res, next) => {
  res.send('processAddRecord')
}

let formEditRecord = (req, res, next) => {
  res.send('formEditRecord')
}

let processEditRecord = (req, res, next) => {
  res.send('processEditRecord')
}

let processDeleteRecord = (req, res, next) => {
  res.send('processDeleteRecord')
}

module.exports = {
  viewAllRecord: viewAllRecord,
  formAddRecord: formAddRecord,
  processAddRecord: processAddRecord,
  formEditRecord: formEditRecord,
  processEditRecord: processEditRecord,
  processDeleteRecord: processDeleteRecord
}
