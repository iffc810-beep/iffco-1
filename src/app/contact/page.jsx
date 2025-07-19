'use client';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again.');
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <section className="contact-section">
      <h1 className="section-title">Contact Us</h1>
      <p className="text-content">
        Reach out to us with any inquiries about IFFCO fertiliser dealerships or other questions. We’re here to assist you!
      </p>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            className="form-textarea"
          />
        </div>
        <button
          type="submit"
          disabled={isSending}
          className={isSending ? 'form-button disabled' : 'form-button'}
        >
          {isSending ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
}