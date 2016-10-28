var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')
var passport = require('passport')

/* GET home page. */
router.get('/', controller.viewIndex);

router.get('/records', (req, res, next) => {
  if (req.user) {
    res.render('records')
  } else {
    res.redirect('/')
  }
});

router.get('/record_details', (req, res, next) => {
  if (req.user) {
    res.render('record_details')
  } else {
    res.redirect('/')
  }  
});


module.exports = router;
