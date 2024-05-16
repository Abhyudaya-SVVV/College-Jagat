const mailService = require('../services/mailService');
const validationUtils = require('../utils/validationUtils');

exports.submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input
    const isValid = true

    if (!isValid) {
      return res.status(400).json({ success: false, error: 'Invalid input' });
    }

    // Send feedback email using mailService module
    await mailService.submitContact(name, email, message);

    res.status(200).json({ success: true, message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
};
