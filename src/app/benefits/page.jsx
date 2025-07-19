import Link from 'next/link';
import { FaMoneyBillWave, FaLeaf, FaChartLine, FaUsers, FaHandHoldingHeart, FaShieldAlt } from 'react-icons/fa';

export default function Benefits() {
  return (
    <div className="benefits-container">
      {/* Hero Section */}
      <section className="benefits-hero">
        <h1 className="hero-title">Benefits of an IFFCO Dealership</h1>
        <p className="hero-text">
          Discover why partnering with IFFCO, India’s leading fertiliser cooperative, is a rewarding opportunity for your business.
        </p>
        <Link href="/contact">
          <button className="cta-button">Apply Now</button>
        </Link>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2 className="section-title">Why Choose IFFCO?</h2>
        <p className="text-content">
          An IFFCO fertiliser dealership offers unparalleled advantages, from financial rewards to extensive support, empowering you to grow your business while supporting Indian farmers.
        </p>
        <div className="benefits-grid">
          <div className="benefit-card">
            <FaMoneyBillWave size={40} className="benefit-icon" />
            <h3>Competitive Margins</h3>
            <p>Earn attractive profit margins of 5%–12% on every sale of IFFCO fertilisers, with up to 6% discounts for early payments within 3 days.</p>
          </div>
          <div className="benefit-card">
            <FaLeaf size={40} className="benefit-icon" />
            <h3>High-Quality Products</h3>
            <p>Distribute trusted fertilisers like Nano Urea and DAP, backed by IFFCO’s 54-year legacy of innovation and quality.</p>
          </div>
          <div className="benefit-card">
            <FaChartLine size={40} className="benefit-icon" />
            <h3>Growing Market</h3>
            <p>Tap into IFFCO’s 19% market share in urea and 31% in complex fertilisers, with rising demand for sustainable products.</p>
          </div>
          <div className="benefit-card">
            <FaUsers size={40} className="benefit-icon" />
            <h3>Extensive Network</h3>
            <p>Join a network of over 10,000 dealers, serving millions of farmers across India with strong community ties.</p>
          </div>
          <div className="benefit-card">
            <FaHandHoldingHeart size={40} className="benefit-icon" />
            <h3>Comprehensive Support</h3>
            <p>Receive training, marketing support, and access to IFFCO’s ecosystem, including IFFCO eBazar and IFFCO-MC Crop Science.</p>
          </div>
          <div className="benefit-card">
            <FaShieldAlt size={40} className="benefit-icon" />
            <h3>Trusted Brand</h3>
            <p>Leverage IFFCO’s reputation as India’s leading cooperative, ensuring customer trust and loyalty.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="section-title">Ready to Grow with IFFCO?</h2>
        <p className="cta-text">
          Join our trusted network and start your journey as an IFFCO fertiliser dealer today.
        </p>
        <Link href="/#apply">
          <button className="cta-button">Apply Now</button>
        </Link>
      </section>
    </div>
  );
}