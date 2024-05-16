// contactroute.js
const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactcontroller');

router.post('/submitContact', contactController.submitContact);

module.exports = router;
