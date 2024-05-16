import React, { useState } from "react";
import "../style/contact_us_page.scss";
import Navbar1 from "../components/navbar1";
import Footer from "../components/footer";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      const response = await fetch("https://college-jagat-backend.onrender.com/api/submitContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setNotificationType("success");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setNotificationType("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setNotificationType("error");
    }
  };

  return (
    <>
      <Navbar1 />

      <section>
        <div className="section-header">
          <div className="cu-container">
            <h2>Contact Us</h2>
            <p>
              Have a question or want to get in touch with us? We'd love to hear
              from you! At College Jagat, we're committed to providing the best
              experience for our visitors. Whether you're a prospective student,
              a parent, an educator, or a member of the community, we're here to
              assist you. Feel free to reach out to us with any inquiries,
              feedback, or suggestions you may have. Our dedicated team is ready
              to help and will respond to your message promptly. Contact us
              today and let's start the conversation!
            </p>
          </div>
        </div>

        <div className="cu-container">
          <div class="row">
            <div class="contact-info">
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i className="bx bxs-map"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Address</h4>
                  <p>
                    Indore - Ujjain Road
                    <br /> Gram Baroli,
                    <br />
                    Madhya Pradesh 453111
                  </p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i className="bx bxs-phone"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Phone</h4>
                  <p>+91 62660 61914</p>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i className="bx bx-envelope-open"></i>
                </div>

                <div class="contact-info-content">
                  <h4>Email</h4>
                  <p>Abhyudaya@svvv.edu.in</p>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <h2>Get in touch</h2>
                <div className="input-box">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                  />
                </div>

                <div className="input-box">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>

                <div className="input-box">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type Your Message Here...."
                  ></textarea>
                </div>

                <div className="input-box" id="cu-submit-btn">
                  <input type="submit" value="Send" />
                </div>
              </form>
              {notificationType === "success" && (
                <div className="notification success">
                  Form submitted successfully!
                </div>
              )}
              {notificationType === "error" && (
                <div className="notification error">
                  Error submitting form. Please try again later.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUsPage;
