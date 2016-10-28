'use strict'

var express = require('express');
var router = express.Router();
var user = require('../models/institution.js')
const passport = require('passport')

let Institution = require('../models/institution')


let viewIndex = (req, res, next) => {
  res.render('index', {title: "mediary"})
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
  Institution.register(new Institution({
    IID: req.body.IID,
    name: req.body.name,
    address: req.body.address,
    type: req.body.type,
    username: req.body.username,
    password: req.body.password
  }), req.body.password, (err, Institution) => {
    if(err){
      console.log(err);
      return res.render('register')
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
