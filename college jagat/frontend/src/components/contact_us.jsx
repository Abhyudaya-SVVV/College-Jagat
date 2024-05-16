import  { useState } from 'react';
import '../style/contact_us.scss';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [notificationType, setNotificationType] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/submitContact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setNotificationType('success');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setNotificationType('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setNotificationType('error');
    }
  };

  return (
    <>
      <div className="contact-us">
        <div className="contact-us-heading">
          <div className="cu-line"></div>
          <div className="cu-head">Contact Us</div>
        </div>
        <div className="contact-us-content">
          <div className="cu-left">
            <h1>Get in touch</h1>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              /><br />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              /><br />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea><br />
              <button type="submit" id="submit-btn">Submit</button>
            </form>
            {notificationType === 'success' && (
              <div className="notification success">Form submitted successfully!</div>
            )}
            {notificationType === 'error' && (
              <div className="notification error">Error submitting form. Please try again later.</div>
            )}
          </div>
          <div className="cu-right">
            <img src="../assets/Contactusimg.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
