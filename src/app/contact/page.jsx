'use client';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const router = useRouter();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());
    console.log('Form data:', data);

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok) {
        router.push('/thanks');
      } else {
        alert(result.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section">
      <h1 className="section-title">Customer's Reviews</h1>
      <p className="text-content">
        Reach out to us with any inquiries about IFFCO fertiliser dealerships or other questions. We're here to assist you!
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