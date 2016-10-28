let Model = require('../models/Institution')

let viewIndex = (req, res, next) => {
  res.send('viewIndex')
}

let formLogin = (req, res, next) => {
  res.render('formLogin', {title: "mediary"})
}

let processLogin = (req, res, next) => {
  res.redirect('/dashboard')
}

let formRegister = (req, res, next) => {
  res.render('formRegister', {title: "mediary"})
}

let proccessRegister = (req, res, next) => {
  Model.create(req.body, (err, Institution) => {
    if(err){
      console.log(err);
    }else {
      res.redirect('/dashboard')
    }
  })
}

module.exports = {
  viewIndex: viewIndex,
  formLogin: formLogin,
  processLogin: processLogin,
  formRegister: formRegister,
  proccessRegister: proccessRegister
}
