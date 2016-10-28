var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')

/* GET home page. */
router.get('/', controller.viewIndex);

// LOGIN FORM
router.get('/login', controller.formLogin)

// LOGIN PROCESS
router.post('/login', controller.processLogin)

// REGISTER FORM
router.get('/register', controller.formRegister)

//REGISTER PROCESS
router.post('/register', controller.proccessRegister)


module.exports = router;
