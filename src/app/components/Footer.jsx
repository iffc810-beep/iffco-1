import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3 className="footer-title">Contact Us</h3>
            <p>Email: info@fertilisercooperative.com</p>
            <p>Phone: +91 123-456-7890</p>
            <p>Address: 123 Agri Road, New Delhi, India</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/about" className="footer-link">About</Link></li>
              <li><Link href="/benefits" className="footer-link">Benefits</Link></li>
              <li><Link href="/testimonials" className="footer-link">Testimonials</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Fertiliser Cooperative. All rights reserved.</p>
          <p className="footer-disclaimer">
            Note: Beware of fraudulent dealership offers. Verify all opportunities through official channels.
          </p>
        </div>
      </div>
    </footer>
  );
}