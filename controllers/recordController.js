let ModelRecord = require('../models/record.js')

let viewAllRecord = (req, res, next) => {
  if (req.user) {
    ModelRecord.find({}, (err, records) => {
      if(err){
        console.log(err);
      }else{
        res.render('records', {title: "mediary", records: records})
      }
    })
  } else {
    res.redirect('/')
  }
}

let formAddRecord = (req, res, next) => {
  if (req.user) {
    res.render('new_record', {title: "mediary"})
  } else {
    res.redirect('/')
  }
}

let processAddRecord = (req, res, next) => {
  if (req.user) {
    ModelRecord.create(req.body, (err, record) => {
      if(err){
        console.log(err);
      }else{
        res.redirect('/dashboard/patient/record')
      }
    })
  } else {
    res.redirect('/')
  }
}

let formEditRecord = (req, res, next) => {
  if (req.user) {
    res.render('edit_record', {title: "mediary"})
  } else {
    res.redirect('/')
  }
}

let processEditRecord = (req, res, next) => {
  if (req.user) {
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
  } else {
    res.redirect('/')
  }
}

let processDeleteRecord = (req, res, next) => {
  if (req.user) {
    ModelRecord.findById(req.params.id, (err, recordDeleted) => {
      if(err){
        console.log(err);
      }else{
        recordDeleted.remove((err, recordRemoved) => {
          if(err){
            console.log(err);
          }else{
            console.log(`Data has been deleted`);
            res.redirect('/dashboard/patient/record')
          }
        })
      }
    })
  } else {
    res.redirect('/')
  }
}

module.exports = {
  viewAllRecord: viewAllRecord,
  formAddRecord: formAddRecord,
  processAddRecord: processAddRecord,
  formEditRecord: formEditRecord,
  processEditRecord: processEditRecord,
  processDeleteRecord: processDeleteRecord
}
