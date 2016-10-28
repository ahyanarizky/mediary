'use strict'

var express = require('express');
var router = express.Router();
var user = require('../models/institution.js')
const passport = require('passport')

let ModelInstitution = require('../models/institution.js')


let viewIndex = (req, res, next) => {
  res.render('index')
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
  ModelInstitution.create(req.body, (err, Institution) => {
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
