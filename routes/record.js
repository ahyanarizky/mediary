'use strict'

var express = require('express');
var router = express.Router();
var controller = require('../controllers/recordController')

/* GET LIST ALL RECORD. */
router.get('/', controller.viewAllRecord);

// ADD NEW RECORD
router.get('/add', controller.formAddRecord)

// PROCESS NEW RECORD
router.post('/add', controller.processAddRecord)

// EDIT RECORD
router.get('/edit', controller.formEditRecord)

// PROCESS EDIT RECORD
router.put('/edit/:id', controller.processEditRecord)

// PROCESS DELETE RECORD
router.delete('/delete/:id', controller.processDeleteRecord)


module.exports = router;
