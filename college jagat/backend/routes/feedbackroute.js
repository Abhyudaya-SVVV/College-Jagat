// feedbackroute.js
const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/feedbackcontroller');

router.post('/submitFeedback', feedbackController.submitFeedback);

module.exports = router;
