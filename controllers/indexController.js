<<<<<<< HEAD
'use strict'

var express = require('express');
var router = express.Router();
var user = require('../models/institution.js')
const passport = require('passport')
=======
let Model = require('../models/Institution')
>>>>>>> c2168778be95e523ada6cbaa16b63f4320e45af0

let viewIndex = (req, res, next) => {
  res.send('viewIndex')
}

let formLogin = (req, res, next) => {
  res.render('formLogin', {title: "mediary"})
}

let processLogin = (req, res, next) => {
<<<<<<< HEAD

=======
  res.redirect('/dashboard')
>>>>>>> c2168778be95e523ada6cbaa16b63f4320e45af0
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
