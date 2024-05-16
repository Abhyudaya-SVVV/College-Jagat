import React, { useState } from 'react';
import '../style/feedback.scss';
import Navbar1 from '../components/navbar1';
import Footer from '../components/footer';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedbackType: '',
    message: '',
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/submitFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotification('success');
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          feedbackType: '',
          message: '',
        });
      } else {
        setNotification('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setNotification('error');
    }
  };

  return (
    <>
      <Navbar1 />
      <div className="feedback">
        <div className="feedback-heading">
          <h1>FEEDBACK FORM</h1>
        </div>
        <div className="feedback-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="feedbackType">Feedback Type:</label>
            <select
              id="feedbackType"
              name="feedbackType"
              value={formData.feedbackType}
              onChange={handleChange}
              required
            >
              <option value="">Select Feedback Type</option>
              <option value="General Feedback">General Feedback</option>
              <option value="Faculty Feedback">Faculty Feedback</option>
              <option value="College Feedback">College Feedback</option>
              <option value="Website Feedback">Website Feedback</option>
            </select>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" id="fb-sub-btn">
              Submit
            </button>
          </form>
          {notification === 'success' && (
            <div className="notification success">Feedback submitted successfully!</div>
          )}
          {notification === 'error' && (
            <div className="notification error">Error submitting form. Please try again later.</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FeedbackForm;
