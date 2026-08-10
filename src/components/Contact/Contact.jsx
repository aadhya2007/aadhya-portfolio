import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "I want to hire!",
    message: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "I want to hire!",
        message: "",
      });
    }
  }

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>

      <p>Have a project in mind? Let's talk!</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Your Name</label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            <small className="error">{errors.name}</small>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <small className="error">{errors.email}</small>
          )}
        </div>

        <div className="form-group">
          <label>Subject</label>

          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          >
            <option>I want to hire!</option>
            <option>I want to collaborate!</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Message</label>

          <textarea
            name="message"
            rows="5"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {errors.message && (
            <small className="error">{errors.message}</small>
          )}
        </div>

        <button className="submit-btn" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
