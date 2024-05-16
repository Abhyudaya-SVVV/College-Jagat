const mailService = require('../services/mailService');
const validationUtils = require('../utils/validationUtils');

exports.submitFeedback = async (req, res) => {
  try {
    const { name, email, feedbackType, message } = req.body;

    // Validate input
    const isValid = validationUtils.validateFeedbackForm(name, email, feedbackType, message);
    if (!isValid) {
      return res.status(400).json({ error: 'Invalid input' });
    }

    // Send feedback email
    await mailService.sendFeedbackEmail(name, email, feedbackType, message);

    res.status(200).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
