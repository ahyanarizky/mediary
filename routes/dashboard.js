var express = require('express');
var router = express.Router();
var controller = require('../controllers/dashboardController')

/* GET users listing. */
router.get('/', controller.indexDashboard);


module.exports = router;
