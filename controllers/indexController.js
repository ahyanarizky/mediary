'use strict'

var express = require('express');
var router = express.Router();
var user = require('../models/user.js')
const passport = require('passport')


let formLogin = (req, res, next) => {
  res.send('formLogin')
}

let processLogin = (req, res, next) => {

}

let formRegister = (req, res, next) => {
  res.send('formRegister')
}

let proccessRegister = (req, res, next) => {
  res.send('proccessRegister')
}

module.exports = {
  formLogin: formLogin,
  processLogin: processLogin,
  formRegister: formRegister,
  proccessRegister: proccessRegister
}
