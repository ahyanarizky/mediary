var express = require('express');
var router = express.Router();
var controller = require('../controllers/patientController')

/* GET LIST ALL PATIENT. */
router.get('/', controller.viewAllPatient);

// ADD NEW PATIENT
router.get('/add', controller.formAddPatient)

// PROCESS NEW PATIENT
router.post('/add', controller.processAddPatient)

// EDIT PATIENT
router.get('/edit', controller.formEditPatient)

// PROCESS EDIT PATIENT
router.put('/edit/:id', controller.processEditPatient)

// PROCESS DELETE PATIENT
router.delete('/delete/:id', controller.processDeletePatient)


module.exports = router;
