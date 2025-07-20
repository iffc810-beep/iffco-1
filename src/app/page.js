'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { FaMoneyBillWave, FaLeaf, FaChartLine, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';
import IffcoEcosystem from './components/Ifco.jsx';
import { useRouter } from 'next/navigation';

export default function Home() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(true); // State for popup visibility
  const router = useRouter();

  // Open popup on page load
  useEffect(() => {
    setIsPopupOpen(true);
  }, []);

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
        alert(result.message || 'Failed to send application. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <Image
          src="/slide1.jpg"
          alt="IFFCO Fertiliser Banner"
          width={1200}
          height={400}
          className="hero-image"
          priority
        />
        <h1 className="hero-title">Join IFFCO as a Fertiliser Dealer</h1>
        <p className="hero-text">
          Partner with India’s leading cooperative to empower farmers with sustainable fertilisers for over 54 years.
        </p>
        <button onClick={() => setIsPopupOpen(true)} className="cta-button">Apply Now</button>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="section-title">Why Choose an IFFCO Dealership?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <FaMoneyBillWave size={40} className="benefit-icon" />
            <h3>Competitive Margins</h3>
            <p>Earn attractive profit margins of 5%–12% on every sale of IFFCO fertilisers.</p>
          </div>
          <div className="benefit-card">
            <FaLeaf size={40} className="benefit-icon" />
            <h3>High-Quality Products</h3>
            <p>Distribute trusted, innovative fertilisers backed by IFFCO’s 54-year legacy.</p>
          </div>
          <div className="benefit-card">
            <FaChartLine size={40} className="benefit-icon" />
            <h3>Growing Market</h3>
            <p>Tap into IFFCO’s expanding market share for increased sales opportunities.</p>
          </div>
          <div className="benefit-card">
            <FaUsers size={40} className="benefit-icon" />
            <h3>Extensive Network</h3>
            <p>Join a network of over 10,000 dealers serving millions of farmers across India.</p>
          </div>
          <div className="benefit-card">
            <FaHandHoldingHeart size={40} className="benefit-icon" />
            <h3>Support & Discounts</h3>
            <p>Receive training, marketing support, and discounts up to 6% for early payments.</p>
          </div>
        </div>
      </section>

      {/* Profit and Margin Section */}
      <section className="profit-section">
        <h2 className="section-title">Profit and Margin Potential</h2>
        <p className="text-content">
          An IFFCO fertiliser dealership offers lucrative financial rewards due to high demand and competitive pricing.
        </p>
        <ul className="eligibility-list">
          <li><strong>Profit Margins:</strong> Earn 5%–12% margins on all IFFCO fertiliser sales.</li>
          <li><strong>Early Payment Discounts:</strong> Receive up to 6% discounts for payments within 3 days.</li>
          <li><strong>High Sales Volume:</strong> Benefit from IFFCO’s 19% market share in urea and 31% in complex fertilisers.</li>
          <li><strong>Growing Market:</strong> Leverage innovative products like Nano Fertilisers for increased sales.</li>
        </ul>
      </section>

      <IffcoEcosystem />

      {/* Eligibility and Documents Section */}
      <section className="eligibility-section">
        <h2 className="section-title">Eligibility and Documents Required</h2>
        <p className="text-content">
          To become an IFFCO fertiliser dealer, meet these criteria and prepare the following documents:
        </p>
        <div className="eligibility-grid">
          <div className="eligibility-column">
            <h3 className="sub-section-title">Eligibility Criteria</h3>
            <ul className="eligibility-list">
              <li><strong>Business Experience:</strong> Prior experience in retail or distribution, preferably in agriculture.</li>
              <li><strong>Financial Capability:</strong> Ability to invest at least ₹5–6 lakhs for inventory and setup.</li>
              <li><strong>Regulatory Compliance:</strong> Adherence to local and national fertiliser regulations.</li>
              <li><strong>Agricultural Knowledge:</strong> Understanding of farming needs and fertiliser applications.</li>
              <li><strong>Local Presence:</strong> Established presence in the target market area.</li>
            </ul>
          </div>
          <div className="eligibility-column">
            <h3 className="sub-section-title">Documents Required</h3>
            <ul className="eligibility-list">
              <li><strong>Identity Proof:</strong> Aadhaar card, PAN card, or voter ID.</li>
              <li><strong>Address Proof:</strong> Utility bill, rental agreement, or property documents.</li>
              <li><strong>Land Papers:</strong> Ownership or lease documents for the store location.</li>
              <li><strong>Financial Statements:</strong> Bank statements or proof of financial capability (₹5–6 lakhs).</li>
              <li><strong>Business Registration:</strong> GST registration, trade license, or other permits.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="apply-section" id="apply">
        <h2 className="section-title">Apply to Become a Dealer</h2>
        <p className="text-content">
          Click below to Apply the application form and start your journey with IFFCO.
        </p>
        <button onClick={() => setIsPopupOpen(true)} className="cta-button">Apply Application Form</button>
      </section>

      {/* Popup Application Form */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="popup-close" onClick={() => setIsPopupOpen(false)}>×</button>
            <h2 className="section-title">Apply to Become a Dealer</h2>
            <p className="text-content">
              Submit your application below. Ensure you have the required documents ready for upload.
            </p>
            <form ref={form} onSubmit={sendEmail} className="apply-form">
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
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pincode">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  required
                  className="form-textarea"
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select id="gender" name="gender" required className="form-select">
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select id="category" name="category" required className="form-select">
                  <option value="">Select Category</option>
                  <option value="General">General</option>
                  <option value="OBC">OBC</option>
                  <option value="SC/ST">SC/ST</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="investment">Investment Capability</label>
                <select id="investment" name="investment" required className="form-select">
                  <option value="">Select Investment Range</option>
                  <option value="₹5–10 lakhs">₹5–10 lakhs</option>
                  <option value="₹10–20 lakhs">₹10–20 lakhs</option>
                  <option value="₹20–30 lakhs">₹20–30 lakhs</option>
                  <option value="₹30–50 lakhs">₹30–50 lakhs</option>
                  <option value="Upto ₹1 crore">Upto ₹1 crore</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="business_type">Type of Business</label>
                <select id="business_type" name="business_type" required className="form-select">
                  <option value="">Select Business Type</option>
                  <option value="Retail">Dealership</option>
                  <option value="Wholesale">Distributorship</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Why do you want to become an IFFCO dealer?</label>
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
                {isSending ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title">Customer's Reviews</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <Image
              src="/rohit.jpg"
              alt="Rohit Bansal"
              width={100}
              height={100}
              className="reviewer-img"
            />
            <blockquote className="testimonial">
              ❝ I am very happy to choose IFFCO fertiliser for my new business. It is a well-known brand in the Indian market, so I have not faced any issues. Their products are of exceptional quality, and their support and service have been outstanding. I highly recommend IFFCO fertiliser for your new business. You won't be disappointed! ❞
            </blockquote>
            <p className="reviewer-name">Rohit Bansal<br /><span className="reviewer-role">Dealership</span></p>
          </div>

          <div className="testimonial-card">
            <Image
              src="/jas.jpg"
              alt="Jaspreet Singh"
              width={100}
              height={100}
              className="reviewer-img"
            />
            <blockquote className="testimonial">
              ❝ IFFCO fertiliser has been a game-changer for my new venture. Their strong presence in the Indian market has brought credibility to my business. The high-quality fertilisers and excellent support make it easy to keep customers satisfied. If you're starting a business in agriculture, IFFCO is the way to go. ❞
            </blockquote>
            <p className="reviewer-name">Jaspreet Singh<br /><span className="reviewer-role">Dealership</span></p>
          </div>

          <div className="testimonial-card">
            <Image
              src="/jog.jpg"
              alt="Joginder Prasad"
              width={100}
              height={100}
              className="reviewer-img"
            />
            <blockquote className="testimonial">
              ❝ Partnering with IFFCO fertiliser for my new business was an excellent decision. Their strong reputation in the Indian market ensures customer trust. The quality of their fertilisers is outstanding, and their customer service is prompt and helpful. I highly recommend IFFCO fertiliser to anyone starting an agricultural business. ❞
            </blockquote>
            <p className="reviewer-name">Joginder Prasad<br /><span className="reviewer-role">Dealership</span></p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 className="section-title">Start Your Journey Today</h2>
        <p className="cta-text">
          Ready to empower farmers and grow your business? Join IFFCO’s trusted network now.
        </p>
        <Link href="/contact">
          <button className="cta-button">Contact Now</button>
        </Link>
      </section>

      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: white;
          padding: 2rem;
          border-radius: 8px;
          max-width: 600px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
          position: relative;
        }
        .popup-close {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #ff0000;
          color: white;
          border: none;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .popup-close:hover {
          background: #cc0000;
        }
        .apply-form {
          display: grid;
          gap: 1rem;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-input, .form-textarea, .form-select {
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        .form-textarea {
          min-height: 100px;
          resize: vertical;
        }
        .form-button {
          background: #28a745;
          color: white;
          padding: 0.75rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
        }
        .form-button.disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        .form-button:hover:not(.disabled) {
          background: #218838;
        }
      `}</style>
    </div>
  );
}