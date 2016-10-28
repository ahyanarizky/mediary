var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')
var passport = require('passport')

/* GET home page. */
router.get('/', controller.viewIndex);

router.get('/records', (req, res, next) => {
  res.render('records')
});

router.get('/record_details', (req, res, next) => {
  res.render('record_details')
});

router.get('/dashboard', (req, res, next) => {
  res.render('dashboard/index')
})

module.exports = router;
