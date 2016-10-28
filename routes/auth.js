var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')
var passport = require('passport')


// REGISTER AND LOGIN FORM
router.get('/', controller.formRegisterAndLogin)

// LOGIN PROCESS
router.post('/login', passport.authenticate('local'), controller.processLogin)

//REGISTER PROCESS
router.post('/register', controller.proccessRegister)

module.exports = router
