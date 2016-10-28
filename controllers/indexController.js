'use strict'

var express = require('express');
var router = express.Router();
var user = require('../models/institution.js')
const passport = require('passport')

let ModelInstitution = require('../models/institution.js')


let viewIndex = (req, res, next) => {
  res.render('index', {title: "mediary"})
}

let formRegisterAndLogin = (req, res, next) => {
  res.render('auth', {title: "mediary"})
}

let processLogin = (req, res, next) => {
  req.session.save((err) => {
    if(err){
      console.log(err);
    }else{
      res.redirect('/dashboard')
    }
  })
}

let proccessRegister = (req, res, next) => {
  console.log(req.body);
  ModelInstitution.register({
    IID: req.body.iid,
    name: req.body.name,
    address: req.body.address,
    category: req.body.category,
    username: req.body.username
  }, req.body.password, function(err, result) {
    console.log(result);
    if (err) {
      console.log(err);
      res.render('register', {alert: 'Registration unsuccessfull'})
    } else {
      console.log(`sukses`);
      passport.authenticate('local')(req, res, function(){
        req.session.save(function (err, next) {
          if (err) return next(err)
          res.redirect('/dashboard')
        })
      })
    }
  })

}

module.exports = {
  viewIndex: viewIndex,
  formRegisterAndLogin: formRegisterAndLogin,
  processLogin: processLogin,
  proccessRegister: proccessRegister
}
