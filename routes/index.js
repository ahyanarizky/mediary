var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')
var passport = require('passport')

/* GET home page. */
router.get('/', controller.viewIndex);

// LOGIN FORM
router.get('/login', controller.formLogin)

// LOGIN PROCESS
router.post('/login', passport.authenticate('local'), controller.processLogin)

// REGISTER FORM
router.get('/register', controller.formRegister)

//REGISTER PROCESS
router.post('/register', controller.proccessRegister)

router.get('/records', (req, res, next) => {
  res.render('records')
});

router.get('/record_details', (req, res, next) => {
  res.render('record_details')
});

module.exports = router;
