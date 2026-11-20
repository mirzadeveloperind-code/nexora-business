import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  return (
    <section className="contact-section" id="contact">

      <div className="contact-heading">
        <span className="contact-tag">GET IN TOUCH</span>
        <h2>Let's Talk About Your Project</h2>
        <p>
          Have a project in mind? Let's discuss how we can help
          your business grow.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Contact Information</h3>

          <p>
            We're ready to discuss your ideas and help you find
            the right solution for your business.
          </p>

          <div className="contact-detail">
            <h4>Email</h4>
            <p>hello@nexora.com</p>
          </div>

          <div className="contact-detail">
            <h4>Phone</h4>
            <p>+1 234 567 890</p>
          </div>

          <div className="contact-detail">
            <h4>Location</h4>
            <p>Business Center, New York</p>
          </div>
        </div>

        <div className="contact-form-wrapper">

          {submitted && (
            <div className="success-message">
              Thank you! Your form has been submitted successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">

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
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message →
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;