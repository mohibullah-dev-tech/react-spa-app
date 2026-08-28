import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <motion.section
      className="contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-hero contact-hero">
        <span className="page-badge">GET IN TOUCH</span>

        <h1>
          Let's Build Something
          <span> Amazing Together.</span>
        </h1>

        <p>
          Have a question about this project or want to get in touch? Send us a
          message using the form below.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>
            This contact page demonstrates form handling using React state. User
            input is managed dynamically without reloading the page.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span>📧</span>
              <div>
                <h4>Email</h4>
                <p>hello@reactspa.com</p>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="contact-item">
              <span>⚡</span>
              <div>
                <h4>Response</h4>
                <p>Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          {submitted ? (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="success-icon">✓</div>

              <h2>Message Sent!</h2>

              <p>
                Thank you for contacting us. Your message has been received
                successfully.
              </p>

              <button
                className="primary-btn"
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <>
              <h2>Send a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message →
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
